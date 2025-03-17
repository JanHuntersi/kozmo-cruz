import Footer from "./components/Footer/Footer";
import "./globals.css";

//TODO SEO optimization

export const metadata = {
	title: "Kozmo Cruz",
	description: "KozmoCruz Rock Band iz Slovenije.", 
	verification: {
		//google: "ephPAYWfbfSOHHWnGeqEHiOPuxTXr300eIzTmT2oJcY",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="font-poppins font-rendering text-2xl xl:text-3xl">
				{children}
				<Footer />
			</body>
		</html>
	);
}
