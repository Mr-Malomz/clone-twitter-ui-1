'use client';
import Link from 'next/link';
import { Button } from './ui/Button';
import { handleSignIn } from '@/app/actions/signin';
import { useFormState } from 'react-dom';

export const AuthForm = () => {
	const [formState, action] = useFormState(handleSignIn, { type: 'initial' });

	return (
		<form
			action={action}
			className='w-full lg:w-1/2 border px-4 py-8 border-zinc-300 rounded-lg bg-white'
		>
			<h3 className='text-base lg:text-lg font-medium mb-6 text-center'>
				Keel Twitter Clone
			</h3>
			{formState.type === 'error' && (
				<p className='mb-6 text-center text-red-600'>
					{formState.message}
				</p>
			)}
			<fieldset className='mb-4'>
				<label htmlFor='email' className='block text-sm mb-1'>
					Email
				</label>
				<input
					type='email'
					className='w-full border h-10 rounded-lg border-zinc-300 p-4'
					placeholder='input email'
					name='email'
					required
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
					name='password'
				/>
			</fieldset>
			<Button title='Sign in'/>
			<p className='text-center text-sm text-gray-800 mt-4'>
				Don't have an account?{' '}
				<Link
					href='/signup'
					className='font-medium hover:text-gray-950'
				>
					Sign up
				</Link>
			</p>
		</form>
	);
};
