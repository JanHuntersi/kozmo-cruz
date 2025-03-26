import Footer from "./components/Footer/Footer";
import "./globals.css";
import localFont from 'next/font/local'

//TODO SEO optimization

export const metadata = {
	title: "Kozmo Cruz",
	description: "Kozmo-Cruz Rock Band iz Slovenije.", 
	verification: {
		//google: "ephPAYWfbfSOHHWnGeqEHiOPuxTXr300eIzTmT2oJcY",
	},
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
