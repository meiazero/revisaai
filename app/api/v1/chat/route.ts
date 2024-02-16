export async function POST(request: Request) {
	const body = await request.json();

	return new Response(JSON.stringify(body), {
		headers: { "Content-Type": "application/json" },
		status: 200,
	});
}

export async function GET(request: Request) {
	const body = {
		message: "Method not allowed",
	};

	return new Response(JSON.stringify(body), {
		headers: { "Content-Type": "application/json" },
		status: 200,
	});
}
