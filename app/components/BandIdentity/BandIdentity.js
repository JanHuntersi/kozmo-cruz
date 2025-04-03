"use client";

import Image from "next/image";
import NewAlbum from "../NewAlbum/NewAlbum";

export default function BandIdentity() {
	return (
		<>
			<div className="h-full w-full flex flex-col justify-between grow-0 shrink-0 z-10 sm:border-y-[1.25rem] bg-inherit  sm:border-flou-orange border-none opacity-1 ">
			<div className="logo-container w-100 md:hidden  text-flou-orange flex justify-center items-center flex-row gap-5 p-2 font-bold text-lg font-newKidz">
					<Image loading="lazy" className="px-12 py-3 max-w-[18.75rem] h-auto" src="/gallery/logos/band-logo-shorter.png" width={324} height={236} alt="Panic Panini logo" />
				</div>
		
				<div className="logo-container w-100 hidden   text-flou-orange md:flex justify-center items-center flex-row gap-5 p-2 font-bold text-lg font-newKidz">
					<div className="px-2 mb-1">O NAS</div>
					<div className="px-2 mb-1">NOV DAN</div>
					<Image loading="lazy" className="px-12 py-3 max-w-[18.75rem] h-auto" src="/gallery/logos/band-logo-shorter.png" width={324} height={236} alt="Panic Panini logo" />
					<div className="px-2 mb-1">KONCERTI</div>
					<div className="px-2 mb-1">KONTAKT</div>
				</div>
				<NewAlbum />
			</div>
		</>
	);
}


/*
return (
	<>
		<div className="h-full flex flex-col justify-between grow-0 shrink-0 z-10 sm:border-y-[1.25rem] bg-inherit  sm:border-flou-orange border-none opacity-1  lg:flex">
			<div className="logo-container  opacity-1">
				<Image loading="lazy" className="px-12 py-3 max-w-[18.75rem] h-auto" src="/gallery/logos/band-logo-orange.png" width={324} height={236} alt="Panic Panini logo" />
			</div>
			<NewAlbum />
		</div>
	</>
);
*/
