import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/Theme";
import Navbar from "@/components/navigation/navbar";

// const geistSans = localFont({
// 	src: "./fonts/GeistVF.woff",
// 	variable: "--font-geist-sans",
// 	weight: "100 900",
// });
// const geistMono = localFont({
// 	src: "./fonts/GeistMonoVF.woff",
// 	variable: "--font-geist-mono",
// 	weight: "100 900",
// });

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
	title: "Dev Overflow",
	description:
		"A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
	icons: {
		icon: "/images/site-logo.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
			>
				<ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
					<Navbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
