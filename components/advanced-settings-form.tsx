"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";

const advancedFormSchema = z.object({
	initialPrompt: z.string(),
	endPrompt: z.string(),
});

const advancedFormDefaultValues: Partial<z.infer<typeof advancedFormSchema>> = {
	initialPrompt:
		"Tenho um texto para ser revisado, onde pode haver erros de escrita, conjugações, ou até mesmo de concordância. A seguir, o texto:",
	endPrompt:
		"Verifique a gramática deste texto e sugira correções, se necessário.",
};

export function AdvancedSettingsForm() {
	const form = useForm<z.infer<typeof advancedFormSchema>>({
		defaultValues: advancedFormDefaultValues,
		resolver: zodResolver(advancedFormSchema),
	});

	return (
		<Form {...form}>
			<form className="space-y-4">
				<FormField
					name="initialPrompt"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="font-semibold">Texto Inicial</FormLabel>
							<FormControl>
								<Textarea {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					name="endPrompt"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="font-semibold">Texto Final</FormLabel>
							<FormControl>
								<Textarea {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
}
