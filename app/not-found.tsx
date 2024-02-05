import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
	return (
		<div className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center space-y-8">
			<div className="flex flex-col gap-2 md:gap-4">
				<div className="mx-auto flex flex-row items-center gap-2 md:gap-6">
					<Icons.brokenLink className="h-12 w-auto" />
					<h1 className="text-center text-2xl font-bold md:text-4xl">
						Página não encontrada
					</h1>
				</div>
				<p className="text-center text-lg font-medium">
					Parece que você seguiu um link quebrado ou digitou um endereço que não
					existe.
				</p>
			</div>
			<Button asChild>
				<Link href="/" title="Página inicial">
					Voltar para a página inicial
				</Link>
			</Button>
		</div>
	);
}
