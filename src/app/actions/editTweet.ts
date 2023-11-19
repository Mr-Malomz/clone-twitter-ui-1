'use server';

import { createClient } from '@/utils/createClient';
import { redirect } from 'next/navigation';

export const handleEditTweet = async (id: string, formData: FormData) => {
	const keelClient = createClient();
	const content = formData.get('content')?.toString() ?? '';

	const response = await keelClient.api.mutations.updateTweet({
		where: { id },
		values: { content },
	});

	if (response.data) {
		redirect('/auth/home');
	} else {
		console.error(response.error);
	}
};
