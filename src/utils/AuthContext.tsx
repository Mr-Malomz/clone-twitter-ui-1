import { createContext, useContext, useState, ReactNode } from 'react';

type User = {
	name: string;
	token: string;
};

type AuthContextType = {
	user: User | null;
	login: (userData: User) => void;
	logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
	children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);

	const login = (userData: User) => {
		// Perform authentication API call and update user state
		setUser(userData);
	};

	const logout = () => {
		// Perform logout API call and clear user state
		setUser(null);
	};

	const contextValue: AuthContextType = { user, login, logout };

	return (
		<AuthContext.Provider value={contextValue}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}

	return context;
};
