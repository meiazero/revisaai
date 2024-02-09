"use client";

import { cn } from "@/lib/utils";
import { Sparkle, Sparkles } from "lucide-react";
import { useState } from "react";
import { AdvancedSettings } from "./advanced-settings";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Textarea } from "./ui/textarea";

interface SideNavBarProps {
	className?: string;
}

export function SideNavBar({ className }: SideNavBarProps) {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handlerVisible = () => {
		setIsVisible(!isVisible);
	};

	// temporary handler
	const handlerSubmit = () => {
		setIsLoading(!isLoading);
		setTimeout(() => {
			setIsLoading(false);
		}, 5000);
	};

	return (
		<aside
			className={cn(
				"space-y-4 border-b border-zinc-300 p-4 md:border-e",
				className,
			)}
		>
			<Label className=" font-semibold">Texto para revisar</Label>
			<Textarea className="w-full" />

			<Separator />
			<AdvancedSettings onClick={handlerVisible} visibility={isVisible} />
			<Separator />
			<Button
				className="w-full font-semibold"
				onClick={handlerSubmit}
				disabled={isLoading}
			>
				{isLoading ? (
					<>
						<div>
							<Sparkles className="absolute mr-2 size-4 animate-appear-disappear delay-700" />
							<Sparkle className="mr-2 size-4 animate-appear-disappear delay-1000" />
						</div>
						<p>Corrigindo...</p>
					</>
				) : (
					<>
						<Sparkles className="mr-2 size-4" />
						<p>Corrigir com IA</p>
					</>
				)}
			</Button>
		</aside>
	);
}
