import './General.css';

export const General = () => {
	return (
		<div className="general-container">
			<section className="first-cont">
				<section className="info">
					<img
						src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png"
						alt=""
						className="img-info mb-1"
					/>
					<h2>Oscar Antonio Rodriguez Carmona</h2>
					<p className="mb-0">
						Carrera: Lic. Administracion Informatica
					</p>

					<p className="mb-0">Matricula: 2020601970</p>
					<p className="mb-0">CURP: ROCO010924HMCDRSA0</p>
					<p className="mb-0">Correo: oscar.7n7@gmail.com</p>
					<p className="mb-0">Telefono: 5530234861</p>
					<p className="mb-0">Fecha inscripcion: 01/02/2024</p>
					<p className="mb-0">Campus: Chalco</p>
				</section>
				<section className="info">
					<h2>Historial academico</h2>

					<p className="mb-0">Estado: Regular</p>
					<p className="mb-0">Beca otorgada: Setenta porciento</p>
					<p className="mb-0">Materias en curso: 2</p>
					<p className="mb-0">Materias aprobadas: 1</p>
					<p className="mb-0">Materias no aprobadas: 0</p>
					<p className="mb-0">Avance: 33.33%</p>
				</section>
			</section>
			<section className="second-cont">
				<h2>Historial academico</h2>
				<table>
					<tbody>
						<tr>
							<td>Materia</td>
							<td>Calificacion</td>
							<td>Evaluacion</td>
							<td>Periodo</td>
							<td>Cuatrimestre</td>
						</tr>
						<tr>
							<td>Matematicas</td>
							<td>9</td>
							<td>Ordinaria</td>
							<td>2024-03</td>
							<td>1ro</td>
						</tr>
					</tbody>
				</table>
			</section>
		</div>
	);
};
