"use client";

import Image from "next/image";
import NewAlbum from "../NewAlbum/NewAlbum";
import ScrollTo from "@/app/global-components/ScrollTo/ScrollTo";

export default function BandIdentity() {
	return (
		<>
			<div className="h-full w-full flex flex-col justify-between grow-0 shrink-0 z-10 sm:border-y-[1.25rem] bg-inherit  sm:border-flou-orange border-none opacity-1 ">
				<div className="logo-container w-100 md:hidden  text-flou-orange flex justify-center items-center flex-row gap-5 p-2 font-bold text-lg font-newKidz">
					<Image priority   className="px-12 py-3 max-w-[18.75rem] h-auto" src="/gallery/logos/band-logo-shorter.png" width={324} height={236} alt="Panic Panini logo" />
				</div>

				<div className="logo-container w-100 hidden   text-flou-orange md:flex justify-center items-center flex-row gap-5 p-2 font-bold text-lg font-newKidz">
					<div className="px-2 mb-1 cursor-pointer">
						<ScrollTo toId="about" duration={1500}>
							O NAS
						</ScrollTo>
					</div>
					<div className="px-2 mb-1 cursor-pointer">
						<ScrollTo toId="listen" duration={1500}>
							NOV DAN
						</ScrollTo>
					</div>
					<Image priority className="px-12 py-3 max-w-[18.75rem] h-auto" src="/gallery/logos/band-logo-shorter.png" width={324} height={236} alt="Panic Panini logo" />
					<div className="px-2 mb-1 cursor-pointer">
						<ScrollTo toId="concerts" duration={1500}>
							KONCERTI
						</ScrollTo>
					</div>
					<div className="px-2 mb-1 cursor-pointer">
						<ScrollTo toId="contacts" duration={1500}>
							KONTAKT
						</ScrollTo>
					</div>
				</div>
				<NewAlbum />
			</div>
		</>
	);
}
