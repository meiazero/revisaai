import { cn } from "@/lib/utils";
import React from "react";

interface MainContainerProps {
	className?: string;
	children: React.ReactNode;
}

export function MainContainer({ children, className }: MainContainerProps) {
	return (
		<main className={cn("container flex min-h-[calc(100vh-10rem)]", className)}>
			{children}
		</main>
	);
}
