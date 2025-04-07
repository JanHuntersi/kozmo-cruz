import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Listen from "./components/Listen/Listen";
import BandMembers from "./components/About/BandMembers";
import ContactUs from "./components/ContactUs/ContactUs";
import TextParallax from "./components/TextParallax/TextParallax";
import Shows from "./components/Shows/Shows";
import tourDates from '@/data/tourDates.json';
import BookingManagement from "./components/BookingManagement/BookingManagement";

export default async function Home() {

	return (
		<>
			<main className="min-h-screen bg-0f0f0f">
				<Intro data={tourDates}/>
				<About />
				<ContactUs />
				<Listen />
				<Shows data={tourDates}/>
				<BandMembers />
				<TextParallax />
				<BookingManagement />
				{/*<PhotoGallery />*/}
			</main>
		</>
	);
}

