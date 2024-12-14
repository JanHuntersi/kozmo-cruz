"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import ScrollTo from "@/app/global-components/ScrollTo/ScrollTo";
import ButtonPrimary from "@/app/global-components/ButtonPrimary/ButtonPrimary";
import { MapMapper, Github } from "@/app/svg-icons/svg-icons";

const observerOptions = {
	rootMargin: "0px",
	threshold: 0.3,
};

const tourDates = [
	{
		id: 1,
		date: "22 Dec",
		dayTime: "Petek 20.30 - 23.00",
		venue: "Dvorana Štuk",
		city: "Maribor",
		link: "https://stuk.org/dogodek/hushhush-special-face2face-night-boiler-edition/",
	},
	
];

export default function IntroTourDates() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true });
	return (
		
		<div
			className={`flex flex-col justify-center items-center lg:justify-end lg:items-end`}
			style={{
				transform: isInView ? "none" : "translateY(-100px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
			}}
			ref={sectionRef}>
			<h2 className="text-white font-permanentMarker text-2xl md:text-3xl lg:text-4xl">
				Prihajajoči koncerti
			</h2>
			<ul className="list-none">
				{tourDates.map((gig) => {
					return (
						<li
							key={gig.id}
							className="flex items-center my-10 justify-between text-xl md:justify-end md:text-2xl lg:text-2xl xl:text-3xl">
							<a
								href={gig.link}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center w-full hover:text-green-500">
								<div className="flex flex-col justify-center items-center date w-[4.7rem] h-[4.7rem] p-2 bg-fluo-green mr-4 text-2xl rounded-md border-8 border-white md:mr-12 lg:w-[5.5rem] lg:h-[5.5rem]">
									<p className="font-bold text-xl text-[#6f705f] leading-none text-center uppercase lg:text-3xl">
										{gig.date}
									</p>
								</div>
								<div className="text-white text-right leading-none md:mr-12">
									<p>{gig.dayTime}</p>
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
			{/* //TODO: Add this button when the shows section is added
			<div className="gap-x-3 lg:flex">
				<div className="hidden lg:block">
					<ScrollTo toId="shows" duration={1500}>
						<ButtonPrimary>Find out more</ButtonPrimary>
					</ScrollTo>
				</div>
			</div>
			*/}
		</div>
	);
}
