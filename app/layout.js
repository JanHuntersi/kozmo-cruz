import Footer from "./components/Footer/Footer";
import "./globals.css";
import localFont from 'next/font/local'

//TODO favicon !

export const metadata = {
	title: "Kozmo Cruz",
	description: "Kozmo Cruz je pet članska rock skupina, ki ustvarja po lastnih glasbenih pravilih.",
	keywords: ["Kozmo Cruz", "rock band", "glasbena skupina", "glasba Slovenija", "koncerti", "indie rock"],
	authors: [{ name: "Kozmo Cruz" }],
	creator: "Kozmo Cruz",
	openGraph: {
	  title: "Kozmo Cruz",
	  description: "Če zveni dobro, potem je prav. Spoznaj pet člansko rock skupino Kozmo Cruz.",
	  url: "https://kozmo-cruz.si",
	  siteName: "Kozmo Cruz",
	  images: [
		{
		  url: "/gallery/logos/band-logo-shorter.png", 
		  width: 1200,
		  height: 630,
		  alt: "Kozmo Cruz bend promo slika",
		},
	  ],
	  type: "website",
	  locale: "sl_SI",
	},
	metadataBase: new URL("https://kozmo-cruz.si"),
  };
  

const newKidz = localFont({
	src: "./fonts/new_kidz.ttf",
	display: 'swap',
	variable: "--font-new-kidz",
})

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${newKidz.variable}  font-rendering text-2xl xl:text-3xl`}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
