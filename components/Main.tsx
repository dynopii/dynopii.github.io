/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import logo from '../images/release-logo.png';

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
									<Image src={logo} alt="logo" width={24} height={24} />
									<div className="flex ml-6 sm:m-0 flex-grow">
										<span color="labelTitle" className="banner_title sm:mt-3 sm:ml-0">
											Linear Release 2021.06
										</span>
									</div>
									<span color="labelFaint" className="ml-6 title_separator sm:hidden">
										|
									</span>
									<span className="ml-6 sm:ml-0 sm:mt-3">See what’s new →</span>
								</div>
							</a>
						</div>
					</div>
					<span className="animate">
						<h1 className="hero_title text-white sm:text-5xl md:text-6xl">
							The issue tracking
							<br />
							tool you'll enjoy using
						</h1>
					</span>
					<span className="animate">
						<p className="hero_sub_text sm:text-2xl">
							Linear helps streamline software projects, sprints, tasks, and bug tracking. It's built for
							high-performance teams.
						</p>
					</span>
					<div className="spacer"></div>
					<div className="animate">
						<button type="submit" className="signup_btn">
							Sign up for free →
						</button>
					</div>
					<div className="spacer"></div>
					<div className="image_container animate">
						<div className="glow"></div>
						<svg
							width="3120"
							height="761"
							viewBox="0 0 3120 761"
							fill="none"
							stroke="#5E6AD2"
							xmlns="http://www.w3.org/2000/svg"
							className="hero_svg"
						>
							<line y1="0.5" x2="3120" y2="0.5" className="jsx-3892812271"></line>
							<line y1="77.5" x2="3120" y2="77.5" className="jsx-3892812271"></line>
							<line y1="690.5" x2="3120" y2="690.5" className="jsx-3892812271"></line>
							<line y1="760.5" x2="3120" y2="760.5" className="jsx-3892812271"></line>
							<line y1="632.5" x2="3120" y2="632.5" className="jsx-3892812271"></line>
							<line x1="1036.5" y1="1" x2="1036.5" y2="764" className="jsx-3892812271"></line>
							<line x1="2076.5" y1="1" x2="2076.5" y2="760" className="jsx-3892812271"></line>
							<line x1="829.758" y1="760.563" x2="1060.76" y2="632.563" className="jsx-3892812271"></line>
							<line x1="829.758" y2="128" x2="1060.76" y1="0" className="jsx-3892812271"></line>
							<line x1="1078.68" y1="760.617" x2="1231.68" y2="632.617" className="jsx-3892812271"></line>
							<line x1="1078.68" y2="128" x2="1231.68" y1="0" className="jsx-3892812271"></line>
							<line x1="1268.59" y1="760.708" x2="1360.59" y2="632.708" className="jsx-3892812271"></line>
							<line x1="1268.59" y2="128" x2="1360.59" y1="0" className="jsx-3892812271"></line>
							<line x1="1420.54" y1="760.797" x2="1477.54" y2="632.797" className="jsx-3892812271"></line>
							<line x1="1420.54" y2="128" x2="1477.54" y1="0" className="jsx-3892812271"></line>
							<line x1="2048.25" y1="632.568" x2="2267.25" y2="760.568" className="jsx-3892812271"></line>
							<line x2="2048.25" y2="128" x1="2267.25" y1="0" className="jsx-3892812271"></line>
							<line x1="1561.5" y1="634" x2="1561.5" y2="761" className="jsx-3892812271"></line>
							<line x1="1561.5" y2="127" x2="1561.5" y1="0" className="jsx-3892812271"></line>
							<line x1="1885.32" y1="632.616" x2="2042.32" y2="763.62" className="jsx-3892812271"></line>
							<line x2="1885.32" y2="131" x1="2042.32" y1="0" className="jsx-3892812271"></line>
							<line x1="1751.41" y1="632.708" x2="1843.41" y2="760.708" className="jsx-3892812271"></line>
							<line x2="1751.41" y2="128" x1="1843.41" y1="0" className="jsx-3892812271"></line>
							<line x1="1652.48" y1="632.844" x2="1694.48" y2="760.844" className="jsx-3892812271"></line>
							<line x2="1652.48" y2="128" x1="1694.48" y1="0" className="jsx-3892812271"></line>
							<rect
								x="1036.5"
								y="79.5"
								width="1040"
								height="553"
								rx="7.5"
								className="jsx-3892812271 border"
							></rect>
							<rect
								x="1040.5"
								y="83.5"
								width="1031"
								height="545"
								rx="3.5"
								className="jsx-3892812271 border"
							></rect>
							<line x1="1226" y1="128.5" x2="2071" y2="128.5" className="jsx-3892812271 uiline"></line>
							<line x1="1226" y1="156.5" x2="2071" y2="156.5" className="jsx-3892812271 uiline"></line>
							<line x1="1226" y1="191.5" x2="2071" y2="191.5" className="jsx-3892812271 uiline"></line>
							<line x1="1226" y1="226.5" x2="2071" y2="226.5" className="jsx-3892812271 uiline"></line>
							<line x1="1226" y1="254.5" x2="2071" y2="254.5" className="jsx-3892812271 uiline"></line>
							<line x1="1226" y1="287.5" x2="2071" y2="287.5" className="jsx-3892812271 uiline"></line>
							<line x1="1226" y1="322.5" x2="2071" y2="322.5" className="jsx-3892812271 uiline"></line>
							<line x1="1226" y1="358.5" x2="2071" y2="358.5" className="jsx-3892812271 uiline"></line>
							<line x1="1226" y1="393.5" x2="2071" y2="393.5" className="jsx-3892812271 uiline"></line>
							<line x1="1226" y1="428.5" x2="2071" y2="428.5" className="jsx-3892812271 uiline"></line>
							<line x1="1226" y1="456.5" x2="2071" y2="456.5" className="jsx-3892812271 uiline"></line>
							<line x1="1226" y1="490.5" x2="2071" y2="490.5" className="jsx-3892812271 uiline"></line>
							<line x1="1226" y1="525.5" x2="2071" y2="525.5" className="jsx-3892812271 uiline"></line>
							<line x1="1226" y1="559.5" x2="2071" y2="559.5" className="jsx-3892812271 uiline"></line>
							<line x1="1226" y1="594.5" x2="2071" y2="594.5" className="jsx-3892812271 uiline"></line>
							<line x1="1225.5" y1="83.0009" x2="1225.5" y2="628.001" className="jsx-3892812271"></line>
							<rect
								x="1058.5"
								y="106"
								width="19"
								height="19"
								rx="9.5"
								className="jsx-3892812271 ui"
							></rect>
							<rect
								x="1181.5"
								y="108"
								width="15"
								height="15"
								rx="7.5"
								className="jsx-3892812271 ui"
							></rect>
							<rect x="1062.5" y="144" width="9" height="9" className="jsx-3892812271 ui"></rect>
							<rect x="1063.5" y="166.5" width="9" height="9" className="jsx-3892812271 ui"></rect>
							<rect x="1063.5" y="189" width="9" height="9" className="jsx-3892812271 ui"></rect>
							<rect x="1063.5" y="242.5" width="9" height="9" className="jsx-3892812271 ui"></rect>
							<rect x="1079" y="318.5" width="9" height="9" className="jsx-3892812271 ui"></rect>
							<rect x="1079" y="406.5" width="9" height="9" className="jsx-3892812271 ui"></rect>
							<rect x="1079" y="472.5" width="9" height="9" className="jsx-3892812271 ui"></rect>
							<rect x="1079" y="494.5" width="9" height="9" className="jsx-3892812271 ui"></rect>
							<rect x="1065" y="582" width="9" height="9" className="jsx-3892812271 ui"></rect>
							<rect x="1065" y="605.5" width="9" height="9" className="jsx-3892812271 ui"></rect>
						</svg>
						<img src={'/screenshot.jpeg'} className="app_screenshot_one" alt="app-screenshot" />
					</div>
				</div>
			</div>
		</div>
	);
};
