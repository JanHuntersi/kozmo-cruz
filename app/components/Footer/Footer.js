import Container from "@/app/global-components/Container/Container";



export default function Footer() {
	return (
		<section id="footer" className=" ">
			<footer className="w-full">
				{/*
				<div className=" py-16">
			
					<Container customClasses="flex flex-col lg:items-center lg:flex-row">
						<div className="basis-2/3 text-white">
							<h3 className="text-5xl font-bold">Subscribe</h3>
							<p>To our newsletter to get the latest updates and live gigs info.</p>
						</div>
						<div className="flex items-cente w-full mt-2.5 lg:mt-0 lg:basis-1/3 lg:justify-end">
							<SubscribeForm />
						</div>
					</Container>
				</div>
				*/}
				<div className="bg-black text-white pt-3 pb-3">
					<Container customClasses="flex-row justify-center items-center">
						
						<div className="text-sm text-center mt-3 mb-3">
							<p>© 2024 Kozmo-Cruz. Vse pravice pridržane.</p>
							<p className="pt-2 text-sm">Made by Jancii</p>
						</div>


					</Container>
					{/*
<div className="bg-black text-white mt-2 py-2">
						<p className="text-[0.7rem] text-center leading-tight mb-1">
							Website powered by{" "}
							<a className="text-yellow-btn-primary underline underline-offset-4 hover:text-yellow-600" href="https://www.paninopanini.co.uk/" target="_blank" rel="noreferrer">
								
							</a>{" "}
							😎
						</p>
					</div>
					*/
					}

				</div>
			</footer>
		</section>
	);
}
