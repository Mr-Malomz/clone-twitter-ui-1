import { Nav } from '@/components/Nav';
import { Tweet } from '@/components/Tweet';
import { TweetForm } from '@/components/TweetForm';
import { createClient } from '@/utils/createClient';
import { redirect } from 'next/navigation';

export default async function Home() {
	const keelClient = createClient();

	if (!keelClient.ctx.isAuthenticated) {
		redirect('/');
	}

	return (
		<main className='min-h-screen w-full bg-[#fafafa]'>
			<Nav />
			<div className='w-full mt-6 flex justify-center'>
				<div className='w-full lg:w-1/2'>
					<TweetForm />
					<section className='border-t border-t-zinc-200 mt-6 px-2 py-4'>
						<Tweet />
					</section>
				</div>
			</div>
		</main>
	);
}
