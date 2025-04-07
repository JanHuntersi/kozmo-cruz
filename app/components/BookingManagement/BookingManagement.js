"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Container from "@/app/global-components/Container/Container";

export default function BookingManagement() {
    const textRef = useRef(null);
    const isInView = useInView(textRef, { once: true });

    return (
        <section
            id="booking"
            className={`flex bg-black justify-center items-center w-full  mx-auto  lg:pt-28 pb-16 lg:pb-28 `}>
            <div
                className="flex justify-center flex-col lg:items-center "
                ref={textRef}
              >
                <div className="flex flex-col max-w-4xl text-center xs:p-15 lg:p-0">
                    <h2 className="font-bold pb-2  leading-[50px] ">Management & Booking</h2>
                    <Container customClasses="flex-row justify-center items-center">
                        <div className="mt-2 text-2xl text-center">
                            <a
                                href="mailto:kozmocruz.band@gmail.com?subject=Pozdrav&body=Želim se povezati z vašim bendom!"
                                className="text-white underline hover:text-white"
                            >
                                kozmocruz.band@gmail.com
                            </a>
                        </div>
                        
                    </Container>
                </div>
            </div>

        </section>
    );
}
