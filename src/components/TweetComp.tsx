import { Heart, MessageCircle, Pencil, Repeat2 } from 'lucide-react';
import { FC } from 'react';
import { Tweet, User } from '../../keelClient';
import Link from 'next/link';
import { DeleteButton } from './ui/DeleteButton';
import { handleDeleteTweet } from '@/app/actions/deleteTweet';

type TweetCompType = {
	tweet: Tweet;
	user: User;
};

export const TweetComp: FC<TweetCompType> = ({ user, tweet }) => {
	return (
		<div className='flex border p-2 rounded-lg mb-2'>
			<div className='w-8 h-8 rounded-full flex justify-center items-center bg-slate-700 text-sm font-medium text-white flex-shrink-0'>
				{tweet.handle.substring(0, 2)}
			</div>
			<div className='ml-4'>
				<header className='flex items-center mb-2'>
					<h5 className='font-medium'>{tweet.handle}</h5>
					<p className='mx-1 font-light'>|</p>
					<p className='text-sm'>{tweet.createdAt.toDateString()}</p>
				</header>
				<p className='text-sm text-zinc-500 mb-2'>{tweet.content}</p>
				{user.id === tweet.userId && (
					<div className='flex gap-4 items-center'>
						<Link
							href={`${tweet.id}`}
							className='flex items-center border py-1 px-2 rounded-lg hover:bg-zinc-300'
						>
							<Pencil className='h-4 w-4' />
							<p className='ml-2 text-sm'>Edit</p>
						</Link>
						<form action={handleDeleteTweet}>
							<input type='hidden' name='id' value={tweet.id} />
							<DeleteButton />
						</form>
						<button className='flex items-center border py-1 px-2 rounded-lg hover:bg-zinc-300'>
							<Repeat2 className='h-4 w-4' />
							<p className='ml-2 text-sm'>Repost</p>
						</button>
						<button className='flex items-center border py-1 px-2 rounded-lg hover:bg-zinc-300'>
							<Heart className='h-4 w-4' />
							<p className='ml-2 text-sm'>Like</p>
						</button>
						<button className='flex items-center border py-1 px-2 rounded-lg hover:bg-zinc-300'>
							<MessageCircle className='h-4 w-4' />
							<p className='ml-2 text-sm'>Reply</p>
						</button>
					</div>
				)}
			</div>
		</div>
	);
};
