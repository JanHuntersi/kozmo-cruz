"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";

export default function About() {
	const textRef = useRef(null);
	const isInView = useInView(textRef, { once: true });

	return (
		<section
			id="about"
			className="relative flex flex-col items-center justify-end w-full mt-16 mx-auto max-w-[150rem] lg:mt-28">
		
			{/* Glavni Container */}
			<Container customClasses="relative flex flex-col lg:flex-row lg:items-start lg:gap-x-12 lg:items-center lg:justify-center">
				<div
					className="flex flex-col lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl"
					ref={textRef}
					style={{
						transform: isInView ? "none" : "translateX(-100px)",
						opacity: isInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					}}>
					<h2 className="font-permanentMarker font-bold  pb-6">Naša zgodba</h2>
					<p >
						Kozmo Cruz je energičen rock bend, ki združuje surovost klasičnega rocka z moderno
						produkcijo in izjemno odrsko karizmo.
					</p>
					<p className="pt-8">
						S svojo avtentičnostjo in predanostjo glasbi so si hitro ustvarili zveste oboževalce.
						Njihov najnovejši album "Stardust Rebels" govori o notranjih bitkah, iskanju svobode
						in hrepenenju po nečem večjem.
					</p>
				</div>
				{/* Slika za večje zaslone */}
				<div className="hidden lg:block w-full  lg:max-w-lg xl:max-w-xl lg:relative">
					<Image
						className="w-full object-cover lg:rounded-md"
						src="/bend.jpg"
						width={750}
						height={533}
						alt="Holding guitar"
					/>
				</div>
			</Container>
			{/* Slika za manjše zaslone */}
			<div className="block lg:hidden w-full pt-16 ">
				<Image
					className="w-full object-cover"
					src="/bend.jpg"
					width={750}
					height={533}
					alt="Holding guitar"
				/>
			</div>
		</section>
	);
}
