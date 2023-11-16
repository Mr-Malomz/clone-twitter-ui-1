import { cookies } from 'next/headers';

export async function GET() {
	cookies().delete('keelToken');

	return new Response('log out successful', {
		status: 200,
	});
}
