"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import ScrollTo from "@/app/global-components/ScrollTo/ScrollTo";
import ButtonPrimary from "@/app/global-components/ButtonPrimary/ButtonPrimary";
import { MapMapper } from "@/app/svg-icons/svg-icons";





export default function IntroTourDates({tourDates}) {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true });
	return (
		
		<div
			className={`flex flex-col justify-center items-center `}
			style={{
				transform: isInView ? "none" : "translateY(-100px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
			}}
			ref={sectionRef}>
			<h2 className="text-center text-2xl md:text-3xl lg:text-4xl pb-3">
				Prihajajoči koncerti
			</h2>
			<ul className="list-none">
				{tourDates.map((gig) => {
					return (
						<li
							key={gig.id}
							className="flex items-center my-10 justify-between text-xl md:justify-end md:text-2xl lg:text-2xl xl:text-3xl">
							<a
								href={gig.link ?? "#"}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center w-full hover:text-green-500">
								<div className="flex flex-col justify-center items-center date w-[4.7rem] h-[4.7rem] p-2 bg-flou-orange mr-4 text-2xl rounded-md border-8 border-white md:mr-12 lg:w-[5.5rem] lg:h-[5.5rem]">
									<p className="font-bold text-xl text-white leading-none text-center uppercase lg:text-3xl">
										{gig.date_text}
									</p>
								</div>
								<div className="text-white text-right leading-none md:mr-12">
									<p>{gig.daytime_text}</p>
									<p>{gig.venue}</p>
									<div className="flex justify-end md:hidden">
										<MapMapper extraClasses="mr-2" />
										<p>{gig.city}</p>
									</div>
								</div>
								<div className="hidden text-right text-white leading-none md:flex">
									<MapMapper extraClasses="mr-2" />
									<p>{gig.city}</p>
								</div>
							</a>
						</li>
					);
				})}
			</ul>
			
			<div className="gap-x-3 lg:flex">
				<div>
					<ScrollTo toId="shows" duration={1500}>
						<ButtonPrimary>Več špilov</ButtonPrimary>
					</ScrollTo>
				</div>
			</div>
		</div>
	);
}
