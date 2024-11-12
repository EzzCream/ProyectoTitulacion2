import { Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
	return (
		<div>
			<div className="container-fluid">
				<Link to={'inicio'} className="navbar bg-body-tertiary link">
					<span className="navbar-brand mb-0 h1">SAEAzteca</span>
				</Link>
			</div>
		</div>
	);
};
