"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
	name: z.string().min(3, {
		message: "Nome deve conter pelo menos 3 caracteres",
	}),
	email: z.string().email({
		message: "E-mail inválido",
	}),
});

export default function WaitingListForm() {
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		setIsLoading(!isLoading);
		form.reset();
		await new Promise(resolve => setTimeout(resolve, 2000));

		toast.success("Você foi inscrito na lista de espera!", {
			description: `Um e-mail de confirmação foi enviado para ${data.email} com mais informações.`,
			duration: 5000,
		});

		setIsLoading(isLoading);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				autoComplete="off"
				className="mx-auto flex w-full flex-col items-center space-y-4"
			>
				<FormField
					disabled={isLoading}
					name="name"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel htmlFor={field.name}>Nome</FormLabel>
							<FormControl>
								<Input disabled={isLoading} placeholder="john doe" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					disabled={isLoading}
					name="email"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel htmlFor={field.name}>E-mail</FormLabel>
							<FormControl>
								<Input
									disabled={isLoading}
									className=" w-full "
									placeholder="john@doe.com"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" disabled={isLoading} className="w-full uppercase">
					{isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
					Inscrever-se
				</Button>
			</form>
		</Form>
	);
}
