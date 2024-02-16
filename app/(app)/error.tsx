"use client";

import { Button } from "@/components/ui/button";

interface ErrorProps {
	reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
	return (
		<div>
			<h1>Alguma coisa deu errado. :/</h1>
			<Button onClick={reset}>Tente novamente</Button>
		</div>
	);
}
