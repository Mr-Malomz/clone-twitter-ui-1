'use client';
import { FC } from 'react';
import { Button } from './ui/Button';
import { Tweet } from '../../keelClient';
import { handleEditTweet } from '@/app/actions/editTweet';

type EditTweetFormType = {
	tweet: Tweet;
};

export const EditTweetForm: FC<EditTweetFormType> = ({ tweet }) => {
	const updateTweet = handleEditTweet.bind(null, tweet.id);

	return (
		<form action={updateTweet}>
			<textarea
				name='content'
				cols={30}
				rows={2}
				className='w-full border rounded-lg mb-2 p-4'
				placeholder='What is happening'
				defaultValue={tweet.content}
			/>
			<div className='flex justify-end'>
				<div>
					<Button title='Update' />
				</div>
			</div>
		</form>
	);
};
