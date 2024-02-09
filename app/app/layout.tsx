import { ApikeyButton } from "@/components/api-key-button";
import { SideNavBar } from "@/components/side-nav-bar";

interface AppLayoutProps {
	children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
	return (
		<main className="flex w-full flex-col bg-white md:min-h-[calc(100vh-10rem)] md:flex-row">
			<SideNavBar className="md:w-1/5" />
			<aside className="md:w-4/5">{children}</aside>
			<ApikeyButton />
		</main>
	);
}
