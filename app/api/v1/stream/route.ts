import { NextRequest, NextResponse } from "next/server";

// Função para converter um iterador assíncrono em um stream
function iteratorToStream(iterator: AsyncIterable<string>) {
	const asyncIterator = iterator[Symbol.asyncIterator]();
	return new ReadableStream({
		async pull(controller) {
			const { value, done } = await asyncIterator.next();
			if (done) {
				controller.close();
			} else {
				controller.enqueue(new TextEncoder().encode(value));
			}
		},
	});
}

// Função para simular o envio de mensagens ao longo do tempo
async function* messageGenerator() {
	let count = 1;
	while (count <= 10) {
		yield `<p>Mensagem ${count}</p>`;
		count++;
		await new Promise(resolve => setTimeout(resolve, 200)); // Aguarda  1 segundo antes de enviar a próxima mensagem
	}
}

export async function GET(request: NextRequest) {
	const iterator = messageGenerator();
	const stream = iteratorToStream(iterator);
	return new NextResponse(stream);
}
