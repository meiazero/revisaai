import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

interface ApiKeyCardProps {
	className?: string;
	onClick?: () => void;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ApiKeyCard({
	className,
	onClick,
	value,
	onChange,
}: ApiKeyCardProps) {
	return (
		<Card className={cn("", className)}>
			<CardHeader className="p-2">
				<CardTitle className="flex  items-center gap-2 text-sm">
					Adicione sua chave da OpenAI
					<a
						href="https://platform.openai.com/account/api-keys"
						target="_blank"
						rel="noreferrer"
						className="text-xs font-normal text-blue-800 underline"
					>
						(Obter chave da API aqui)
					</a>
					<div
						onClick={onClick}
						className="rounded-full border p-1 hover:text-red-500"
					>
						<X className="size-4" />
					</div>
				</CardTitle>
			</CardHeader>
			<CardContent className="px-2 py-0 pb-2">
				<Input
					placeholder="org-Aw2r00Q6sKbuWVTxQMiMAgiGO"
					value={value}
					onChange={onChange}
				/>
			</CardContent>
		</Card>
	);
}
