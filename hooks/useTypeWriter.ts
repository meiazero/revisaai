import { useEffect, useState } from "react";

export function useTypeWriter(text: string, speed: number = 50) {
	const [state, setState] = useState({ index: 0, displayText: "" });

	useEffect(() => {
		let timerId: NodeJS.Timeout | null = null;
		if (state.index < text.length) {
			timerId = setTimeout(() => {
				setState(prevState => ({
					index: prevState.index + 1,
					displayText: prevState.displayText + text[prevState.index],
				}));
			}, speed);
		}
		return () => clearTimeout(timerId!);
	}, [text, state.index, speed]);

	return state.displayText;
}
