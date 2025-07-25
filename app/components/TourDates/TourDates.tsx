import ButtonPrimary from "@/app/global-components/ButtonPrimary/ButtonPrimary";
import { TourDate } from "@/app/lib/tour-date.interface";
import React from "react";

export default function TourDates({ data }) {
	return (
		<div >
			{data.map((gig: TourDate, index:number) => (
				<div
					key={index}
					className="flex items-center justify-between py-2 border-solid border-b-2 border-white last:border-b-0 leading-tight text-xl md:py-3 md:text-2xl lg:py-5 lg:justify-center lg:text-2xl xl:text-3xl lg:flex-row"
				>
					<div className="flex flex-col items-center md:items-end justify-between text-center text-base leading-none w-[40%] md:text-xl lg:w-6/12 lg:flex-row lg:justify-start lg:text-left lg:text-2xl">
						<div className="flex flex-col justify-center items-center date w-[3.4rem] h-[3.4rem] leading-tight p-2 bg-flou-orange rounded-md lg:mr-12 lg:w-[5.3rem] lg:h-[5.3rem]">
							<p className="font-bold text-center uppercase">{gig.date_text}</p>
						</div>
						{(gig.start_time_text || gig.event_date) && (
							<div className=" text-white font-semibold leading-tight lg:ml-[20%]">
								<p>{gig.day_of_week}</p>
								<p>{gig.start_time_text}</p>
							</div>
						)}
					</div>
					<div className="flex flex-col mt-2.5 items-center text-center text-base justify-between w-[60%] md:text-xl lg:flex-row lg:text-left lg:w-6/12 lg:mt-0 lg:text-2xl">
						<div className="text-white font-semibold leading-tight">
							<p>{gig.venue}</p>
							<p>{gig.city}</p>
						</div>
						{gig.link && (
							<div className="ml-2.5 lg:ml-auto">
								<ButtonPrimary customClasses="text-xs md:text-sm lg:text-base">
									<a target="_blank" rel="noopener noreferrer" href={gig.link}>
										Get ticket
									</a>
								</ButtonPrimary>
							</div>
						)}
					</div>
				</div>
			))}
		</div>
	);
}
