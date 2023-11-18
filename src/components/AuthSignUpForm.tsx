'use client';
import Link from 'next/link';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { useFormState } from 'react-dom';
import { handleSignUp } from '@/app/actions/signup';

export const AuthSignUpForm = () => {
	const [formState, action] = useFormState(handleSignUp, { type: 'initial' });

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
				<Input type='text' name='name' placeholder='input name' />
			</fieldset>
			<fieldset className='mb-4'>
				<label htmlFor='email' className='block text-sm mb-1'>
					Email
				</label>
				<Input type='email' name='email' placeholder='input email' />
			</fieldset>
			<fieldset className='mb-4'>
				<label htmlFor='password' className='block text-sm mb-1'>
					Password
				</label>
				<Input
					type='password'
					name='password'
					placeholder='input password'
				/>
			</fieldset>
			<Button title='Sign up' />
			<p className='text-center text-sm text-gray-800 mt-4'>
				Already have an account?{' '}
				<Link href='/' className='font-medium hover:text-gray-950'>
					Sign in
				</Link>
			</p>
		</form>
	);
};
