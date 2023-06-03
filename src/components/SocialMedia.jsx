import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";

const SocialMedia = () => (
	<div className='app__social'>
		<div>
			<a
				className='app__social'
				href='https://www.linkedin.com/in/aaryanbhatiaghosh/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<SiLinkedin />
			</a>
		</div>
		<div>
			<a
				className='app__social'
				href='https://twitter.com/aaryanbg_IN'
				target='_blank'
				rel='noopener noreferrer'
			>
				<BsTwitter />
			</a>
		</div>
		<div>
			<a
				className='app__social'
				href='https://www.instagram.com/metalxrayy/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<BsInstagram />
			</a>
		</div>
		<div>
			<a
				className='app__social'
				href='https://github.com/METALXRAY'
				target='_blank'
				rel='noopener noreferrer'
			>
				<SiGithub />
			</a>
		</div>
	</div>
);

export default SocialMedia;
