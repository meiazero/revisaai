import { promptSchema } from "@/config/promptSchema";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Sparkle, Sparkles } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AdvancedSettings } from "./advanced-settings";
import { advancedFormDefaultValues } from "./advanced-settings-form";
import { Button } from "./ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { Separator } from "./ui/separator";
import { Textarea } from "./ui/textarea";

interface SideNavBarProps {
	className?: string;
	onSubmit: (data: z.infer<typeof promptSchema>) => void;
	isLoading: boolean;
}

export function SideNavBar({
	className,
	onSubmit,
	isLoading,
}: SideNavBarProps) {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const form = useForm<z.infer<typeof promptSchema>>({
		defaultValues: advancedFormDefaultValues,
		resolver: zodResolver(promptSchema),
	});

	const handlerVisible = () => {
		setIsVisible(!isVisible);
	};

	return (
		<aside
			className={cn(" border-b border-zinc-300 p-4 md:border-e", className)}
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<FormField
						name="middlePrompt"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="font-semibold">
									Texto para revisão
								</FormLabel>
								<FormControl>
									<Textarea rows={15} {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Separator />
					<AdvancedSettings onClick={handlerVisible} visibility={isVisible} />
					<Separator />
					<Button
						className="w-full font-semibold"
						type="submit"
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
				</form>
			</Form>
		</aside>
	);
}
