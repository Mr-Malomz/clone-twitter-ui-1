import { cookies } from 'next/headers';
import { APIClient } from '../../keelClient';

type Options = {
	token?: string;
};

export const createClient = ({ token }: Options = {}) => {
	const baseUrl = process.env.KEEL_API_URL;

	if (!baseUrl) {
		throw new Error('Missing KEEL_API_URL');
	}

	const keelClient = new APIClient({ baseUrl });

	const authCookieContent = cookies().get('keelToken')?.value;

	if (authCookieContent) {
		keelClient.client.setToken(authCookieContent);
	}

	if (token) {
		keelClient.client.setToken(token);
	}

	return keelClient;
};

export const setKeelToken = (token: string) => {
	cookies().set('keelToken', token, {
		httpOnly: true,
		secure: true,
		sameSite: 'strict',
	});
};

export const deleteKeelToken = () => {
	cookies().delete('keelToken');
};
