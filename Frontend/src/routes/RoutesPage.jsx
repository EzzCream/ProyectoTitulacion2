import { Route, Routes } from 'react-router-dom';
import { Land } from '../components/Land/Land.jsx';
import { NavBar } from '../components/NavBar/NavBar.jsx';

export const RoutesPage = () => {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="inicio" element={<Land />} />
			</Routes>
		</div>
	);
};
