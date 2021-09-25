/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import DhwaniSVG from '../public/svgs/dhwanilogo.svg';
import { Button } from './layout/Button';
import Link from 'next/link'

export const Main = () => {
	return (
		<div className="layout_content flex flex-col flex-auto">
			<div
				className="splash pt-40 sm:pt-20 flex justify-center w-full relative overflow-hidden"
			>
				<div
					className="splash_content_container content_container text-center flex flex-col justify-center items-center"
				>
					<div className="splash_banner_animate">
						<div className="splash_banner mb-12">
							<Link href='/products/dhwani'>
							<a className="banner_container">
								<div className="gradient_background"></div>
								<div
									className="banner_container_content bg-gray-222 rounded-default px-10 py-10 z-1 border-4 border-transparent flex flex-row items-center justify-center sm:flex-col sm:py-3 sm:px-4"
								>
									<Image src={DhwaniSVG} alt="logo" width={40} height={40} />
									<div className="flex ml-6 sm:m-0 flex-grow">
										<span className="text-white text-body-lg sm:mt-3 sm:ml-0">
											Latest Product Release &mdash; Dhwani
										</span>
									</div>
									<span className="ml-6 title_separator sm:hidden">
										|
									</span>
									<span className="ml-6 sm:ml-0 sm:mt-3 text-body-lg text-brand font-medium">Read more →</span>
								</div>
							</a>
							</Link>
						</div>
					</div>
					<span className="animate">
						{/* <h1 className="hero_title text-white sm:text-5xl md:text-6xl"> */}
						<h1 className="text-h1 font-semibold text-white sm:text-5xl md:text-6xl">
							Redefining the way you communicate
						</h1>
					</span>
					<span className="animate">
						<p className="text-h6 text-gray-e0e font-light mt-10 mb-10">
							Effectivate communication is not easy. We help you provide unique personalized communication to your customers helping them understand your business better. Never before in the industry and surely nowhere else.
						</p>
					</span>
					<div className="spacer"></div>
					<div className="spacer"></div>
					<div className="spacer"></div>
					<div className="spacer"></div>
					<div className="spacer"></div>
					<div className="animate flex items-center justify-center md:flex-col">
						{/* <button type="submit" className="signup_btn">
							Sign up for free →
						</button> */}
						<a href='mailto:hello@dynopii.com'><Button title='Schedule demo' /></a>
						<a href='mailto:hello@dynopii.com'><div className='ml-20 md:ml-0 md:mt-20'><Button title='Contact Sales' uiType='outlined' /></div></a>
					</div>
					<div className="spacer"></div>
					
				</div>
			</div>
		</div>
	);
};
