'use client';
import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useKeel } from '@/utils/KeelContext';
import Link from 'next/link';

export const AuthSignUpForm = () => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const router = useRouter();
	const keel = useKeel();

	useEffect(() => {
		if (keel.ctx.isAuthenticated && keel.ctx.token) {
			router.push('/auth/home');
		}
	}, []);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const resp = await keel.api.mutations.authenticate({
				emailPassword: {
					email,
					password,
				},
				createIfNotExists: true,
			});

			if (resp && resp.data?.identityCreated) {
				const createUserPromise = keel.api.mutations.createUser({
					name,
				});

				await Promise.all([createUserPromise]);

				keel.client.setToken(resp.data.token);
				setIsLoading(false);
				router.push('/auth/home');
			} else {
				setIsLoading(false);
				alert('Error creating in user');
			}
		} catch (error) {
			setIsLoading(false);
			alert('Error creating in user');
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='w-full lg:w-1/2 border px-4 py-8 border-zinc-300 rounded-lg bg-white'
		>
			<h3 className='text-base lg:text-lg font-medium mb-6 text-center'>
				Keel Twitter Clone
			</h3>
			<fieldset className='mb-4'>
				<label htmlFor='name' className='block text-sm mb-1'>
					Name
				</label>
				<input
					type='name'
					className='w-full border h-10 rounded-lg border-zinc-300 p-4'
					placeholder='input name'
					required
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</fieldset>
			<fieldset className='mb-4'>
				<label htmlFor='email' className='block text-sm mb-1'>
					Email
				</label>
				<input
					type='email'
					className='w-full border h-10 rounded-lg border-zinc-300 p-4'
					placeholder='input email'
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</fieldset>
			<fieldset className='mb-4'>
				<label htmlFor='password' className='block text-sm mb-1'>
					Password
				</label>
				<input
					type='password'
					className='w-full border h-10 rounded-lg border-zinc-300 p-4'
					placeholder='input password'
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</fieldset>
			<button
				disabled={isLoading}
				className='py-1 px-4 w-full h-10 rounded-lg text-white bg-zinc-800 hover:bg-zinc-900'
			>
				{isLoading ? 'Please wait!' : 'Sign up'}
			</button>
			<p className='text-center text-sm text-gray-800 mt-4'>
				Already have an account?{' '}
				<Link href='/' className='font-medium hover:text-gray-950'>
					Sign in
				</Link>
			</p>
		</form>
	);
};
