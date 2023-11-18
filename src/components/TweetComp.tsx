'use client';
import { Pencil, Trash2 } from 'lucide-react';
import { Modal } from './Modal';
import { FC, useState } from 'react';
import { Tweet, User } from '../../keelClient';

type ITweetComp = {
	tweet: Tweet;
	user: User;
};

export const TweetComp: FC<ITweetComp> = ({ user, tweet }) => {
	const [open, setOpen] = useState<boolean>(false);
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
				<p className='text-sm text-zinc-400 mb-2'>{tweet.content}</p>
				<div className='flex gap-4 items-center'>
					<button
						className='flex items-center border py-1 px-2 rounded-lg hover:bg-zinc-300'
						onClick={() => setOpen(true)}
					>
						<Pencil className='h-4 w-4' />
						<p className='ml-2 text-sm'>Edit</p>
					</button>
					<button className='flex items-center border py-1 px-2 rounded-lg hover:bg-red-300'>
						<Trash2 className='h-4 w-4' />
						<p className='ml-2 text-sm'>Delete</p>
					</button>
				</div>
			</div>
			<Modal open={open} setOpen={setOpen} />
		</div>
	);
};
