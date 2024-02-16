interface RevisionContentProps {
	streamText?: string;
}

export function RevisionContent({ streamText }: RevisionContentProps) {
	return (
		<>
			{!streamText ? (
				<p className="text-center text-xl text-muted-foreground">
					Adicione um texto para revisar
				</p>
			) : (
				<p className="w-full max-w-5xl border"> {streamText}</p>
			)}
		</>
	);
}
