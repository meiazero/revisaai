import { z } from "zod";

export const promptSchema = z.object({
	initialPrompt: z.string().min(1).max(255),
	middlePrompt: z.string().min(1).max(255),
	endPrompt: z.string().min(1).max(255),
});
