import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const Header = () => (
	<div className='app__header app__flex'>
		<div className='header-content'>
			<img
				src={images.profilePicture} // Replace with the actual URL or import path of your profile picture
				alt='Profile Picture'
				className='profile-picture'
			/>
		</div>
		<div className='header_para'>
			I'm Aaryan Bhatia Ghosh, a final year computer science student at VIT,
			Vellore. I am a full stack developer with a keen interest in web
			development and machine learning. I am also a competitive programmer and
			have a good grasp of data structures and algorithms. I am a quick learner
			and a team player. I am always looking for opportunities to learn and
			grow.
		</div>

		<div className='resume-download'>
			<a
				href='https://drive.google.com/file/d/1c4t9DhN661CmegRF2IswFe4KoEbeR7re/view?usp=sharing'
				target='_blank'
				rel='noopener noreferrer'
			>
				Download Resume
			</a>
		</div>
	</div>
);

export default AppWrap(Header, "home");
