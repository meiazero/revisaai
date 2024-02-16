"use client";

import { ApikeyButton } from "@/components/api-key-button";
import { MainContainer } from "@/components/layout/main-container";
import { RevisionContent } from "@/components/revision-content";
import { SideNavBar } from "@/components/side-nav-bar";
import { WarningPopup } from "@/components/warning-popup";
import { promptSchema } from "@/config/promptSchema";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

export default function Page() {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [streamText, setStreamText] = useState<string>("");

	// temporary handler
	const onSubmit = async ({
		initialPrompt,
		middlePrompt,
		endPrompt,
	}: z.infer<typeof promptSchema>) => {
		setIsLoading(!isLoading);
		try {
			// await new Promise(resolve => setTimeout(resolve, 500));
			const response = await fetch("http://localhost:3000/api/v1/chat", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					data: { initialPrompt, middlePrompt, endPrompt },
				}),
			}).then(res => res.json());

			const dataResponse = response.data;

			toast.success("Texto corrigido com sucesso!", {
				description:
					"O texto foi corrigido com sucesso. Verifique as sugestões.",
				duration: 1000,
			});

			setStreamText(dataResponse?.middlePrompt);
		} catch (error) {
			toast.error("Erro ao corrigir texto. Tente novamente.");
		} finally {
			setIsLoading(isLoading);
		}
	};

	return (
		<>
			<SideNavBar
				className="md:w-1/5"
				onSubmit={onSubmit}
				isLoading={isLoading}
			/>
			<aside className="md:w-4/5">
				<MainContainer className="flex-col gap-4 py-8 ">
					<WarningPopup />

					<RevisionContent streamText={streamText} />
				</MainContainer>
			</aside>
			<ApikeyButton />
		</>
	);
}
