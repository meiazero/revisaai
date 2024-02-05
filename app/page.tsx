import { Hero } from "@/components/hero";
import Image from "next/image";

export default function Page() {
	return (
		<main className="container flex min-h-[calc(100vh-10rem)] flex-col pt-10 md:flex-row md:pt-20">
			<Hero />
			<div className="flex w-full flex-col items-center py-6">
				<Image
					src="/interface.webp"
					alt="interface"
					width={600}
					height={300}
					loading="lazy"
					className="rounded-md bg-muted-foreground"
				/>
			</div>
		</main>
	);
}
