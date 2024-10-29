import { useContext } from 'react';
import User from '../../context/Provider.jsx';
import { Navigate } from 'react-router-dom';

export const Main = () => {
	const { user } = useContext(User);

	console.log(user);

	if (user.length === 0) {
		return <Navigate to="/login" />;
	} else if (user.length != 0) {
		return <Navigate to="/inicio" />;
	}

	return (
		<div>
			<h1>Redirect</h1>
		</div>
	);
};
