import { Hero } from "@/components/hero";
import { MainContainer } from "@/components/layout/main-container";
import Image from "next/image";

export default function Page() {
	return (
		<MainContainer className="flex-col pt-10 md:flex-row md:pt-20">
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
		</MainContainer>
	);
}
