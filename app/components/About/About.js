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
					<h2 className="font- font-bold  pb-6">Kdo je KOZMO CRUZ </h2>
					<p >
						KOZMO CRUZ smo petčlanska skupina, ki z avtorsko glasbo sledimo preprostemu pravilu – v glasbi ni pravil! Če zveni dobro, potem je dobro. Njihove pesmi so večinoma v slovenščini, saj skozi materni jezik najlažje izrazijo svoja čustva.
					</p>
					<p className="pt-8">
						Izdan je že prvi singel, sledil pa bo mini album (EP), s katerim želimo predstaviti svojo glasbeno vizijo. Čeprav novi na sceni, imamo kot posamezniki že odrske in studijske izkušnje, ki jih bodo nadgradili na koncertih po Sloveniji. Strast do ustvarjanja, energija in skupni cilji nas ženejo naprej – na vedno nove odre in v nove glasbene podvige.
					</p>
				</div>
				{/* Slika za večje zaslone */}
				<div className="hidden lg:block w-full  lg:max-w-lg xl:max-w-xl lg:relative">
					<Image
						className="w-full object-cover lg:rounded-md"
						src="/gallery/band-images/band-stairs.png"
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
					src="/gallery/band-images/band-stairs.png"
					width={750}
					height={533}
					alt="Holding guitar"
				/>
			</div>
		</section>
	);
}
