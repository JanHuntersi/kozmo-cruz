import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Listen from "./components/Listen/Listen";
import BandMembers from "./components/About/BandMembers";
import ContactUs from "./components/ContactUs/ContactUs";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import TextParallax from "./components/TextParallax/TextParallax";
import Shows from "./components/Shows/Shows";
import { getTourDates } from "./lib/supabaseService";
import { getCachedTourDates } from "./lib/cache";

export default async function Home() {
	const tourDates = await getCachedTourDates(getTourDates);

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
				<PhotoGallery />
			</main>
		</>
	);
}

