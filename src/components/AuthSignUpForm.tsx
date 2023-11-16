'use client';
import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';
import { handleSignUp } from '@/app/actions/signup';

export const AuthSignUpForm = () => {
	const [formState, action] = useFormState(handleSignUp, { type: 'initial' });
	const { pending } = useFormStatus();

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
				<label htmlFor='name' className='block text-sm mb-1'>
					Name
				</label>
				<input
					type='name'
					className='w-full border h-10 rounded-lg border-zinc-300 p-4'
					placeholder='input name'
					required
					name='name'
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
					name='email'
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
			<button
				disabled={pending}
				className='py-1 px-4 w-full h-10 rounded-lg text-white bg-zinc-800 hover:bg-zinc-900'
			>
				Sign up
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
