'use server';

import { createClient, setKeelToken } from '@/utils/createClient';
import { FormResponseType } from './types';
import { redirect } from 'next/navigation';

export const handleSignIn = async (
	_: FormResponseType,
	formData: FormData
): Promise<FormResponseType> => {
	const keelClient = createClient();
	const email = formData.get('email')?.toString() ?? '';
	const password = formData.get('password')?.toString() ?? '';

	const response = await keelClient.api.mutations.authenticate({
		emailPassword: {
			email: email,
			password: password,
		},
		createIfNotExists: false,
	});

	const token = response.data?.token;

	if (!token) {
		return {
			type: 'error',
			message: 'Login failed. Please check your email and password.',
		};
	}
	keelClient.client.setToken(token);

	setKeelToken(token);
	redirect('/auth/home');
};
