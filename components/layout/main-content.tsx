import { cn } from "@/lib/utils";
import React from "react";

interface MainContentProps {
	className?: string;
	children: React.ReactNode;
}

export function MainContent({ children, className }: MainContentProps) {
	return (
		<main className={cn("container flex min-h-[calc(100vh-10rem)]", className)}>
			{children}
		</main>
	);
}
