"use client";

import Image from "next/image";

export default function BendMembers() {
  const images = [
    {
      src: "/gallery/band-images/andraz.png",
      name: "Andraž",
      role: "Vokal"
    },
    {
      src: "/gallery/band-images/zan.png",
      name: "Žan",
      role: "Kitara"
    },
    {
      src: "/gallery/band-images/tim.png",
      name: "Tim",
      role: "Kitara"
    },
    {
      src: "/gallery/band-images/gasper.png",
      name: "Gašper",
      role: "Bas kitara"
    },
    {
      src: "/gallery/band-images/anze.png",
      name: "Anže",
      role: "Bobni"
    },
  ];

  return (
    <section
      id="about"
      className="bg-black relative flex items-center justify-center w-full py-16 mx-auto mt-16 lg:mt-0  pt-16 lg:pt-28 lg:pb-28"
    >
      <div className="flex flex-col items-center mx-auto px-4 max-w-[200rem]">
        <h2 className="font-bold pb-6 text-flou-orange ">
          CRUZERJI
        </h2>
        <div
          className="
            grid 
            grid-cols-2 
            md:grid-cols-3 
            xl:grid-cols-5 
            gap-10 
            mt-8
          "
        >
         {images.map((image, index) => {
  const isLastOdd =
    images.length % 2 === 1 && index === images.length - 1;

  return (
    <a
      key={index}
      href={image.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col items-center gap-x-4 gap-y-1 transition-transform transform hover:scale-105 hover:bg-flou-orange rounded-lg p-4 ${
        isLastOdd ? 'col-span-2 md:col-span-1 justify-self-center' : ''
      }`}
    >
      <div className="w-[150px] h-[150px] rounded-full overflow-hidden aspect-square">
        <Image
          className="object-cover"
          src={image.src}
          width={150}
          height={150}
          alt={`${image.name} - ${image.nickname}`}
        />
      </div>
      <p className="pt-2 font-bold text-3xl ">{image.name}</p>
      <p className="text-center text-xl ">{image.nickname}</p>
      <p className="text-center text-xl ">({image.role})</p>
    </a>
  );
})}

        </div>
      </div>
    </section>
  );
}
