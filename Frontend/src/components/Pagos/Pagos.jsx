import './Pagos.css';

export const Pagos = () => {
	return (
		<div className="cont-pagos">
			<h2 className="display-5">Pagos</h2>
			<section className="prox-pagos">
				<h3>Proximos pagos</h3>
				<table>
					<thead>
						<tr>
							<td>Monto</td>
							<td>Fecha limite</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>$150</td>
							<td>10/12/2024</td>
						</tr>
					</tbody>
				</table>
			</section>
			<section></section>
		</div>
	);
};
