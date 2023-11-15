'use client';
import { keel } from '@teamkeel/client-react';
import { APIClient } from '../../keelClient';
import { ReactNode } from 'react';

export const { KeelProvider, useKeel } = keel(APIClient);

type RootProviderProps = {
	children: ReactNode;
};

export const RootProvider: React.FC<RootProviderProps> = ({ children }) => {
	return (
		<KeelProvider baseUrl={process.env.NEXT_PUBLIC_KEEL_BASE_URL!}>
			{children}
		</KeelProvider>
	);
};
