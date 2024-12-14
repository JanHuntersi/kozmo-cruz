"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Container from "@/app/global-components/Container/Container";
import { Spotify, SoundCloud, Youtube, AppleMusic } from "@/app/svg-icons/svg-icons";
import AudioPlayer from "@/app/global-components/AudioPlayer/AudioPlayer";

export default function Listen() {
	const textRef = useRef(null);
	const isInView = useInView(textRef, { once: true });

	return (
		<section id="listen" className={`w-full mt-16 lg:mt-28  lg:pb-28`}>
			<Container customClasses="flex flex-col lg:flex-row">
				<div
					className="flex flex-col text-center lg:text-left justify-center basis-2/4 lg:max-w-lg xl:max-w-2xl 2xl:max-w-4xl"
					ref={textRef}
					style={{
						transform: isInView ? "none" : "translateX(-100px)",
						opacity: isInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					}}>
					<h2 className=" font-bold pt-3 lg:pt-6 pb-6 font-rockSalt text-albumName">Nov Dan</h2>
					<p>
					Z novim dnevom prihaja tudi nova zgodba. Skupina se kot feniks dviga iz pepela preteklosti, prepleta stare korenine z drznimi zvoki prihodnosti in vabi poslušalce na pot preobrazbe.
					</p>
					<div className="flex row space-x-4 mt-4 justify-center lg:justify-start ">
						<Spotify extraClasses="fill-amber-400" />
						<SoundCloud extraClasses="fill-white" />
						<Youtube extraClasses="fill-white" />
						<AppleMusic extraClasses="fill-white" />
					</div>

				</div>
				<div className="flex items-center justify-center pt-5 basis-2/4 mt-20 lg:mt-0 lg:justify-end lg:pt-[60px]">
					<AudioPlayer />
				</div>
			</Container>
		</section>
	);
}
