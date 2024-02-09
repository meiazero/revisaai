"use client";

import { promptSchema } from "@/config/promptSchema";
import { useFormContext } from "react-hook-form";
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

export const advancedFormDefaultValues: Partial<z.infer<typeof promptSchema>> =
	{
		initialPrompt:
			"Tenho um texto para ser revisado, onde pode haver erros de escrita, conjugações, ou até mesmo de concordância. A seguir, o texto:",
		endPrompt:
			"Verifique a gramática deste texto e sugira correções, se necessário.",
	};

export function AdvancedSettingsForm() {
	const form = useFormContext<z.infer<typeof promptSchema>>();

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
