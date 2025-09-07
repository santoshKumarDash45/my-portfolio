/** @format */

import React from "react";
import Typewriter from 'typewriter-effect';
import './Home.css'
import myResume from './ResumePdf/Resume.pdf'
export const Home = () => {
	return (
		<div className="container-fluid home">
			<div className="container home-content">
				<h1>Hi i'm a</h1>
				<h3>
					<Typewriter
						options={{
							strings: ['Full Stack Developer', 
								      'MERN Stack Developer', 
									  'Web Developer'
									],
							autoStart: true,
							loop: true,
							delay: 5
						}}
					/>
				</h3>
				<div className="button-for-action">
					<div className="hire-me-button">
                       Hire me
					</div>
					<div className="get-resume-button">
						<a href={myResume} download="santosh_kumar_dash_resume">
  							Get Resume
						</a>
					 
					</div>

				</div>
			</div>
		</div>
	);
};
