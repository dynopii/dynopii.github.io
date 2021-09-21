/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import DhwaniSVG from '../public/svgs/dhwanilogo.svg';
import { Button } from './layout/Button';

export const Main = () => {
	return (
		<div className="layout_content flex flex-col flex-auto">
			<div
				className="
            splash
            pt-40
            sm:pt-24
            flex
            justify-center
            w-full
            relative
            overflow-hidden
          "
			>
				<div
					className="
              splash_content_container
              content_container
              text-center
              flex flex-col
              justify-center
              items-center
            "
				>
					<div className="splash_banner_animate">
						<div className="splash_banner mb-12">
							<a href="/releases/2021-06" className="banner_container">
								<div className="gradient_background"></div>
								<div
									className="
                      banner_container_content
                      flex flex-row
                      items-center
                      justify-center
                      sm:flex-col sm:py-3 sm:px-4
                    "
								>
									<Image src={DhwaniSVG} alt="logo" width={40} height={40} />
									<div className="flex ml-6 sm:m-0 flex-grow">
										<span color="labelTitle" className="banner_title sm:mt-3 sm:ml-0">
											Latest Product Release &mdash; Dhwani
										</span>
									</div>
									<span color="labelFaint" className="ml-6 title_separator sm:hidden">
										|
									</span>
									<span className="ml-6 sm:ml-0 sm:mt-3">Read more →</span>
								</div>
							</a>
						</div>
					</div>
					<span className="animate">
						{/* <h1 className="hero_title text-white sm:text-5xl md:text-6xl"> */}
						<h1 className="text-h1 font-semibold text-white sm:text-5xl md:text-6xl">
							Redefining the way you communicate
						</h1>
					</span>
					<span className="animate">
						<p className="text-h5 text-gray-e0e font-light mt-10 mb-10">
							Create effortless & personalized customer experiences with the best in class AI-powered digital and voice automation. Our vision is to make it simple for consumers to do business with you by redefining how artificial intelligence and human insight enable personalized, predictive and effortless customer experiences.
						</p>
					</span>
					<div className="spacer"></div>
					<div className="animate flex items-center justify-center">
						{/* <button type="submit" className="signup_btn">
							Sign up for free →
						</button> */}
						<Button title='Schedule demo' />
						<div className='ml-20'><Button title='Contact Sales' uiType='outlined' /></div>
					</div>
					<div className="spacer"></div>
					<div className="image_container animate">
						<div className="glow"></div>
						
						<img src={'/screenshot.jpeg'} className="app_screenshot_one" alt="app-screenshot" />
					</div>
				</div>
			</div>
		</div>
	);
};
