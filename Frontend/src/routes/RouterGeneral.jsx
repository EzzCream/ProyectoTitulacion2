import { Route, Routes } from 'react-router-dom';
import { Login } from '../components/Login/Login.jsx';
import { RoutesPage } from './RoutesPage.jsx';

export const RouterGeneral = () => {
	return (
		<Routes>
			<Route path="login/" element={<Login />} />
			<Route path="*" element={<RoutesPage />} />
		</Routes>
	);
};
