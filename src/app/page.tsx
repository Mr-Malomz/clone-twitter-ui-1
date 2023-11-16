import { AuthForm } from '@/components/AuthForm';
import { createClient } from '@/utils/createClient';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function SignIn() {
	const keelClient = createClient();

	if (keelClient.ctx.isAuthenticated) {
		redirect('/auth/home');
	}
	
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<AuthForm />
		</main>
	);
}
