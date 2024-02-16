import { z } from "zod";

export const promptSchema = z.object({
	initialPrompt: z
		.string({ required_error: "O prompt inicial é obrigatório" })
		.min(1, {
			message: "O prompt inicial deve ter pelo menos 1 caractere",
		})
		.max(255, {
			message: "O prompt inicial deve ter no máximo 255 caracteres",
		}),
	middlePrompt: z
		.string({ required_error: "O conteúdo para revisão é obrigatório" })
		.min(1, {
			message: "O conteúdo para revisão deve ter pelo menos 1 caractere",
		})
		.max(500, {
			message: "O conteúdo para revisão deve ter no máximo 500 caracteres",
		}),
	endPrompt: z
		.string({ required_error: "O prompt final é obrigatório" })
		.min(1, {
			message: "O prompt final deve ter pelo menos 1 caractere",
		})
		.max(255, {
			message: "O prompt final deve ter no máximo 255 caracteres",
		}),
});
