'use client';
import { Button } from './ui/Button';
import { handleCreateTweet } from '@/app/actions/createTweet';
import { FC } from 'react';

type TweetFormType = {
	handle: string;
};

export const TweetForm: FC<TweetFormType> = ({ handle }) => {
	const createTweet = handleCreateTweet.bind(null, handle);

	return (
		<form action={createTweet}>
			<textarea
				name='content'
				cols={30}
				rows={2}
				className='w-full border rounded-lg mb-2 p-4'
				placeholder='What is happening'
			/>
			<div className='flex justify-end'>
				<div>
					<Button title='Post' />
				</div>
			</div>
		</form>
	);
};
