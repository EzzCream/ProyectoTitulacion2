import { Route, Routes } from 'react-router-dom';
import { Land } from '../components/Land/Land.jsx';
import { NavBar } from '../components/NavBar/NavBar.jsx';
import { Subject } from '../components/Subject/Subject.jsx';
import { General } from '../components/General/General.jsx';
import { Universidad } from '../components/Universidad/Universidad.jsx';
import { Pagos } from '../components/Pagos/Pagos.jsx';
import { Tramites } from '../components/Tramites/Tramites.jsx';
import { Contenido } from '../components/Contenido/Contenido.jsx';

export const RoutesPage = () => {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="inicio" element={<Land />} />
				<Route path="materia/:materiaId" element={<Subject />} />
				<Route path="general" element={<General />} />
				<Route path="universidad" element={<Universidad />} />
				<Route path="pagos" element={<Pagos />} />
				<Route path="tramites" element={<Tramites />} />
				<Route path="contenido" element={<Contenido />} />
			</Routes>
		</div>
	);
};
