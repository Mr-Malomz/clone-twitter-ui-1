'use server';

import { createClient } from '@/utils/createClient';
import { revalidatePath } from 'next/cache';

export const handleDeleteTweet = async (formData: FormData) => {
	const keelClient = createClient();
	const id = formData.get('id')?.toString() ?? '';

	const response = await keelClient.api.mutations.deleteTweet({ id });

	if (response.data) {
		revalidatePath('/auth/home');
	} else {
		console.error(response.error);
	}
};
