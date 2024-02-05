import { WaitingListPopup } from "./waiting-list-popup";

export function Hero() {
	return (
		<div className="mx-auto flex w-full max-w-3xl flex-col">
			<div className="mb-8">
				<h1 className="text-center text-5xl leading-tight md:text-6xl">
					Faça revisões <strong>rápidas</strong> e de forma{" "}
					<strong>simples</strong>
				</h1>
				<p className="text-center text-muted-foreground">
					Utilizando Inteligência Artificial para melhorar sua gramática.
				</p>
			</div>

			<div className="mx-auto w-full md:w-1/2">
				<WaitingListPopup />
			</div>
		</div>
	);
}
