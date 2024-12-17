import { Link } from 'react-router-dom';
import './NavBar.css';
import { useContext } from 'react';
import User from '../../context/Provider.jsx';

export const NavBar = () => {
	const { user } = useContext(User);

	console.log(user.userLogged.name);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link
					to={'universidad'}
					className="navbar bg-body-tertiary link"
				>
					<span className="navbar-brand mb-0 h1">SAEAzteca</span>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link
								to={'inicio'}
								className="navbar bg-body-tertiary link"
							>
								<span className="navbar-brand mb-0 ">
									Materias
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to={'tramites'}
								className="navbar bg-body-tertiary link"
							>
								<span className="navbar-brand mb-0 ">
									Tramites
								</span>
							</Link>
						</li>
						{/* <li className="nav-item">
							<Link
								to={'pagos'}
								className="navbar bg-body-tertiary link"
							>
								<span className="navbar-brand mb-0 ">
									Pagos
								</span>
							</Link>
						</li> */}
						{/* Info */}
						<li className="nav-item nombre">
							<Link
								to={'general'}
								className="navbar bg-body-tertiary link"
							>
								<span className="me-0 navbar-brand mb-0">
									{user.userLogged.name}
								</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
