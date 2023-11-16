import { AuthSignUpForm } from '@/components/AuthSignUpForm';
import { createClient } from '@/utils/createClient';
import { redirect } from 'next/navigation';

export default function SignUp() {
	const keelClient = createClient();

	if (keelClient.ctx.isAuthenticated) {
		redirect('/auth/home');
	}
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<AuthSignUpForm />
		</main>
	);
}
