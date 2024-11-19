import { Link } from 'react-router-dom';
import './Subject.css';
import { Contenido } from '../Contenido/Contenido.jsx';

export const Subject = () => {
	return (
		<div className="subject-container">
			<div className="content-subject">
				<h2 className="display-6 mb-5">Materia</h2>
				<div className="general-materia">
					<div className="card-profesor">
						<img
							src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
							alt=""
							className="img-profesor"
						/>
						<h4>Nombre Profesor</h4>
						<p>correo@correo</p>
					</div>
					<div className="card-materia">
						<h2>Acerca de la materia</h2>
						<div className="cont-cal">
							<h6>Calificaciones</h6>
							<div className="cal">
								<div className="num">10</div>
								<div className="num">-</div>
								<div className="num">-</div>
								<div className="num">-</div>
								<div className="num">-</div>
							</div>
						</div>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Aspernatur quod fuga harum voluptatibus
							recusandae cupiditate perspiciatis voluptates
							accusamus quasi, illo ut sunt in quisquam, fugit,
							nisi temporibus laboriosam modi alias? Lorem ipsum
							dolor sit amet consectetur adipisicing elit. Quo
							error vel molestias repellat eos tempora, culpa
							corrupti sunt eaque officiis, nesciunt, placeat
							perspiciatis in laudantium repellendus doloribus
							eveniet odit hic.
						</p>
						<div className="botones">
							<Link to={'/contenido'} className="btn">
								Contenido
							</Link>
							<button className="btn">Material ayuda</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
