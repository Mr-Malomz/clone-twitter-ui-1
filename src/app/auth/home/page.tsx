import { Nav } from '@/components/Nav';
import { TweetComp } from '@/components/TweetComp';
import { TweetForm } from '@/components/TweetForm';
import { createClient } from '@/utils/createClient';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

export default async function Home() {
	const keelClient = createClient();

	if (!keelClient.ctx.isAuthenticated) {
		redirect('/');
	}

	const tweets = await keelClient.api.queries.listTweets();

	console.log(tweets);

	return (
		<main className='min-h-screen w-full bg-[#fafafa]'>
			<Nav />
			<Suspense
				fallback={<p className='text-center w-full'>Loading....</p>}
			>
				<div className='w-full mt-6 flex justify-center'>
					<div className='w-full lg:w-1/2'>
						<TweetForm />
						<section className='border-t border-t-zinc-200 mt-6 px-2 py-4'>
							{tweets.data?.results.map((tweet) => (
								<TweetComp key={tweet.id} />
							))}
						</section>
					</div>
				</div>
			</Suspense>
		</main>
	);
}
