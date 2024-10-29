import './Subject.css';

export const Subject = () => {
	return (
		<div className="subject-container">
			<div className="sidebar">
				<p className="lead fw-normal option">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-house-door"
						viewBox="0 0 16 16"
					>
						<path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
					</svg>{' '}
					Inicio
				</p>
				<p className="lead fw-normal option">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-chat-square"
						viewBox="0 0 16 16"
					>
						<path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
					</svg>{' '}
					Comentarios
				</p>
			</div>
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
							<button className="btn">Contenido</button>
							<button className="btn">Material ayuda</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
