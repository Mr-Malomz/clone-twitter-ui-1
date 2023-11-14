'use client';
import { useKeel } from '@/utils/KeelContext';
import { useRouter } from 'next/navigation';

export const Nav = () => {
	const keel = useKeel();
	const router = useRouter();

	const handleLogOut = () => {
		keel.client.clearToken();
		router.push('/');
	};

	return (
		<nav className='flex justify-between items-center w-full border border-b-zinc-200 px-8 py-4'>
			<h3 className='text-base lg:text-lg font-medium'>
				Keel Twitter Clone
			</h3>
			<button
				onClick={handleLogOut}
				className='border py-1 px-4 rounded-lg hover:bg-zinc-200'
			>
				Sign out
			</button>
		</nav>
	);
};
