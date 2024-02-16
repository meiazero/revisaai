import { Metadata } from "next";

export const metadata: Metadata = {
	title: "App | RevisaAi",
};

interface AppLayoutProps {
	children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
	return (
		<main className="flex w-full flex-col bg-white sm:flex-row md:min-h-[calc(100vh-10rem)]">
			{children}
		</main>
	);
}
