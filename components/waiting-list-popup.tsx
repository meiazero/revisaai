"use client";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { WaitingListForm } from "./waiting-list-form";

interface WaitingListPopupProps {
	className?: string;
}

export function WaitingListPopup({ className }: WaitingListPopupProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					className={cn(
						"w-full bg-gradient-to-tr from-yellow-500 to-orange-400 font-bold",
						className,
					)}
				>
					<Mail className="mr-2 size-5" />
					<p className="">Entrar na Lista de Espera</p>
				</Button>
			</DialogTrigger>
			<DialogContent className="rounded-md max-md:max-w-xs">
				<DialogHeader>
					<DialogTitle>Cadastro Lista de Espera</DialogTitle>
					<DialogDescription>
						Preencha com seu nome e e-mail para entrar na lista de espera.
					</DialogDescription>
					<Separator />
				</DialogHeader>
				<WaitingListForm />
			</DialogContent>
		</Dialog>
	);
}
