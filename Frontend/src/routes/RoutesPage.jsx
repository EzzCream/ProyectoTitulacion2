import { Route, Routes } from 'react-router-dom';
import { Land } from '../components/Land/Land.jsx';
import { NavBar } from '../components/NavBar/NavBar.jsx';
import { Subject } from '../components/Subject/Subject.jsx';
import { General } from '../components/General/General.jsx';

export const RoutesPage = () => {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="inicio" element={<Land />} />
				<Route path="materia/:materiaId" element={<Subject />} />
				<Route path="general" element={<General />} />
			</Routes>
		</div>
	);
};
