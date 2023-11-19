'use server';

import { createClient } from '@/utils/createClient';
import { revalidatePath } from 'next/cache';

export const handleCreateTweet = async (handle: string, formData: FormData) => {
	const keelClient = createClient();
	const content = formData.get('content')?.toString() ?? '';

	const response = await keelClient.api.mutations.createTweet({
		content,
		handle,
	});

	if (response.data) {
		revalidatePath('/auth/home');
	} else {
		console.error(response.error);
	}
};
