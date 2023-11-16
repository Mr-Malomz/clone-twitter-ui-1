'use server';

import { createClient } from '@/utils/createClient';
import { FormResponseType } from './types';
import { cookies } from 'next/headers';
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
	keelClient.client.setToken(response.data!.token);

	cookies().set('keelToken', response.data!.token, {
		httpOnly: true,
		secure: true,
		sameSite: 'strict',
	});
	redirect('/auth/home');
};
