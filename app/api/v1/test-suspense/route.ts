import { unstable_noStore as very_stable_cache } from "next/cache";

export async function GET(request: Request) {
	very_stable_cache();

	const data = await fetch("https://api.vercel.app/blog", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	const res = await data.json();

	await new Promise(resolve => setTimeout(resolve, 6000));

	return new Response(JSON.stringify(res), {
		headers: {
			"Content-Type": "application/json",
		},
	});
}
