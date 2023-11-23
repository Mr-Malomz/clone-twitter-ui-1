'use client';
import { Button } from './ui/Button';
import { FC } from 'react';
import { Tweet } from '../../keelClient';
import { handleUpdateTweet } from '@/app/actions/updateTweet';

type EditTweetFormType = {
	tweet: Tweet;
};

export const EditTweetForm: FC<EditTweetFormType> = ({ tweet }) => {
	const updateTweet = handleUpdateTweet.bind(null, tweet.id);

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
