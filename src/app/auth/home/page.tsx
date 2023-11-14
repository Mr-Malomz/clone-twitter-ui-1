'use client';
import { Nav } from '@/components/Nav';
import { Tweet } from '@/components/Tweet';
import { TweetForm } from '@/components/TweetForm';
import { useKeel } from '@/utils/KeelContext';
import { useRouter } from 'next/navigation';

export default function Home() {
	const keel = useKeel();
	const router = useRouter();

	if (!keel.ctx.isAuthenticated && !keel.ctx.token) {
		router.push('/');
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
