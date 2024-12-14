import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Listen from "./components/Listen/Listen";
import BandMembers from "./components/About/BandMembers";
import ContactUs from "./components/ContactUs/ContactUs";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import TextParallax from "./components/TextParallax/TextParallax";
export default function Home() {
	return (
		<>
			<main className="min-h-screen bg-0f0f0f">
				<Intro />
				<About />
				<ContactUs />
				<Listen />
				{/*<Shows /> */}
				<BandMembers />
				<TextParallax />
				<PhotoGallery />
			</main>
		</>
	);
}


/*
TODO

element.style {
    background-color: #0f0f0f;
    color: rgb(67 255 182 / var(--tw-text-opacity, 1));
}

*/
