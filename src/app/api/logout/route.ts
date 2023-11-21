import { deleteKeelToken } from '@/utils/createClient';

export async function GET() {
	deleteKeelToken();

	return new Response('log out successful', {
		status: 200,
	});
}
