import { Route, Routes } from 'react-router-dom';
import { Login } from '../components/Login/Login.jsx';

export const RouterGeneral = () => {
	return (
		<Routes>
			<Route path="login/" element={<Login />} />
		</Routes>
	);
};
