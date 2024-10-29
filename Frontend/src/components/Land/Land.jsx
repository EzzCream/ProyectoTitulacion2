import { useContext } from 'react';
import './Land.css';
import { LandDetail } from './LandDetail.jsx';
import User from '../../context/Provider.jsx';
import { Navigate } from 'react-router-dom';

export const Land = () => {
	const { user } = useContext(User);
	console.log(user.userLogged.subjects);
	let i = 1;

	if (user.length === 0) {
		return <Navigate to="/login" />;
	}

	return (
		<div className="container-inicio">
			<div className="cards">
				{user.userLogged.subjects.map((prod) => (
					<LandDetail key={i++} {...prod} />
				))}
			</div>
		</div>
	);
};
