'use server';

import { createClient, setKeelToken } from '@/utils/createClient';
import { FormResponseType } from './types';
import { redirect } from 'next/navigation';

export const handleSignUp = async (
	_: FormResponseType,
	formData: FormData
): Promise<FormResponseType> => {
	try {
		const keelClient = createClient();
		const email = formData.get('email')?.toString() ?? '';
		const password = formData.get('password')?.toString() ?? '';
		const name = formData.get('name')?.toString() ?? '';

		const response = await keelClient.api.mutations.authenticate({
			emailPassword: {
				email,
				password,
			},
			createIfNotExists: true,
		});

		if (!response.data) {
			return { type: 'error', message: response.error.message };
		}

		if (response.data.identityCreated) {
			keelClient.client.setToken(response.data.token);
			await keelClient.api.mutations.createUser({
				name,
				username: email.split('@')[0],
			});

			setKeelToken(response.data.token);

			redirect('/auth/home');
		} else {
			return { type: 'error', message: 'Error creating user!' };
		}
	} catch (e) {
		return { type: 'error', message: `Error creating user - ${e}` };
	}
};
