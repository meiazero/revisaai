import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Nunito_Sans as Font } from "next/font/google";
import "react-loading-skeleton/dist/skeleton.css";

const font = Font({
	subsets: ["latin"],
	weight: ["400", "600", "800"],
	preload: true,
	display: "swap",
	adjustFontFallback: true,
});

export const metadata: Metadata = {
	title: "RevisaAi",
	description:
		"utilize IA para revisar seus textos de forma eficiente e rápida.",
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="pt-br" suppressHydrationWarning>
			<body
				className={cn("min-h-screen bg-background antialiased", font.className)}
			>
				<Header />
				{children}
				<Footer />
				<Toaster richColors closeButton expand={true} position="top-right" />
			</body>
		</html>
	);
}
