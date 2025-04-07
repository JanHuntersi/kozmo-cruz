"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Container from "@/app/global-components/Container/Container";
import {Youtube,Facebook, Instagram, TikTok } from "@/app/svg-icons/svg-icons";

export default function ContactUs() {
	const textRef = useRef(null);
	const isInView = useInView(textRef, { once: true });

	return (
		<section
			id="contacts"
			className={`flex bg-black justify-center items-center w-full pt-16  mx-auto max-w-[200rem] lg:mt-28 lg:pt-28 pb-16 lg:pb-28 `}>
			<div
				className="flex justify-center flex-col lg:items-center lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl"
				ref={textRef}
				style={{
					transform: isInView ? "none" : "translateX(100px)",
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}>
				<div className="flex flex-col max-w-4xl text-center xs:p-15 lg:p-0">
					<h2 className="font-bold pb-6  leading-[50px] ">Hej, mi smo KOZMO CRUZ</h2>
					<Container customClasses="flex-row justify-center items-center">
						<div className=" text-center">
							<p>sledite nam lahko na teh omrežij</p>
						</div>
						<div className="flex gap-4 justify-center mt-4">
							
							<a href="https://www.tiktok.com/@kozmocruz" target="_blank" rel="noopener noreferrer">
							<TikTok />
							</a>
							<a href="https://www.youtube.com/@KozmoCruz" target="_blank" rel="noopener noreferrer">
							<Youtube />
							</a>
							<a href="https://www.facebook.com/people/Kozmo-Cruz/61567119525307/?mibextid=wwXIfr&rdid=UN6n3f2ULehFidVk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1A6VMfm26J%2F%3Fmibextid%3DwwXIfr" target="_blank" rel="noopener noreferrer">
							<Facebook />
							</a>
							<a href="https://www.instagram.com/kozmocruz/#" target="_blank" rel="noopener noreferrer">
							<Instagram />
							</a>
						</div>
					</Container>
				</div>
			</div>

		</section>
	);
}
