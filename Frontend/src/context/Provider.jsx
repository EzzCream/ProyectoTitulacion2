import { createContext, useState } from 'react';

const User = createContext();

/* eslint-disable react/prop-types */
export const Provider = ({ children }) => {
	const [user, setUser] = useState([]);

	return (
		<User.Provider
			value={{
				user,
				setUser,
			}}
		>
			{children}
		</User.Provider>
	);
};

export default User;
