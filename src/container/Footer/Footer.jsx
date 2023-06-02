import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const { username, email, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		setLoading(true);

		const contact = {
			_type: "contact",
			name: formData.username,
			email: formData.email,
			message: formData.message,
		};

		client
			.create(contact)
			.then(() => {
				setLoading(false);
				setIsFormSubmitted(true);
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<h2 className='head-text'>lets get in touch.</h2>

			<div className='app__footer-cards'>
				<div className='app__footer-card '>
					{/* <img src={images.email} alt='email' /> */}
					<a href='papabear.metalxray@gmail.com' className='p-text'>
						mail: papabear.metalxray@gmail.com
					</a>
				</div>
				<div className='app__footer-card'>
					{/* <img src={images.mobile} alt='phone' /> */}
					<a href='tel:+91 9113593092' className='p-text'>
						phone number: +91 9113593092
					</a>
				</div>
			</div>
			{!isFormSubmitted ? (
				<div className='app__footer-form app__flex'>
					<div className='app__flex'>
						<input
							className='p-text'
							type='text'
							placeholder='what is your name.'
							name='username'
							value={username}
							onChange={handleChangeInput}
						/>
					</div>
					<div className='app__flex'>
						<input
							className='p-text'
							type='email'
							placeholder='enter mail id.'
							name='email'
							value={email}
							onChange={handleChangeInput}
						/>
					</div>
					<div>
						<textarea
							className='p-text'
							placeholder='type your message.'
							value={message}
							name='message'
							onChange={handleChangeInput}
						/>
					</div>
					<button type='button' className='p-text' onClick={handleSubmit}>
						{!loading ? "click here to send." : "Sending..."}
					</button>
				</div>
			) : (
				<div>
					<h3 className='head-text'>Thank you for getting in touch!</h3>
				</div>
			)}
		</>
	);
};

export default AppWrap(
	MotionWrap(Footer, "app__footer"),
	"contact",
	"app__whitebg"
);
