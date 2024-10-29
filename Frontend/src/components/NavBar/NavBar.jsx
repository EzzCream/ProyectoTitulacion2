import { Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
	return (
		<div>
			<Link to={'inicio'} className="navbar bg-body-tertiary link">
				<div className="container-fluid">
					<span className="navbar-brand mb-0 h1">SAEAzteca</span>
				</div>
			</Link>
		</div>
	);
};
