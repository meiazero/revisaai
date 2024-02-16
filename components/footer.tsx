import Link from "next/link";
import { Icons } from "./icons";

export default function Footer() {
	return (
		<footer className="flex flex-col items-center justify-center gap-2 border-t border-zinc-300 bg-white py-2">
			<div className="flex flex-row items-center gap-2 text-muted-foreground">
				<p>&copy; 2024 Todos os direitos reservados |</p>
				<Icons.logo className="h-6 w-auto" />
			</div>
			<p className="flex flex-row items-center gap-1 text-sm">
				Powered by
				<span className="h-0 w-0 border-b-[15px] border-l-[10px] border-r-[10px] border-b-black border-l-transparent border-r-transparent" />
				<Link
					href="https://vercel.com"
					title="Vercel"
					target="_blank"
					className="hover:underline"
				>
					vercel
				</Link>
			</p>
		</footer>
	);
}
