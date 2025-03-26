"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Container from "@/app/global-components/Container/Container";
import { Spotify, Youtube,Facebook, Instagram } from "@/app/svg-icons/svg-icons";

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
					<h2 className="font-bold pb-5  leading-[50px] ">Hej, mi smo tudi tukaj</h2>
					<Container customClasses="flex-row justify-center items-center">
						<div className=" text-center">
							<p>sledite nam lahko na teh omrežij</p>
						</div>
						<div className="flex gap-4 justify-center mt-5">
							
							<a href="https://www.spotify.com/" target="_blank" rel="noopener noreferrer">
							<Spotify />
							</a>
							<a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
							<Youtube />
							</a>
							<a href="https://www.spotify.com/" target="_blank" rel="noopener noreferrer">
							<Facebook />
							</a>
							<a href="https://www.spotify.com/" target="_blank" rel="noopener noreferrer">
							<Instagram />
							</a>
						</div>
						<div className="mt-5 text-2xl text-center">
							<p className="pb-1">Management & Booking</p>
							<a
								href="mailto:kozmokruz@gmail.com?subject=Pozdrav&body=Želim se povezati z vašim bendom!"
								className="text-white underline hover:text-white"
							>
								kozmokruz@gmail.com
							</a>
						</div>
					</Container>
				</div>
			</div>

		</section>
	);
}
