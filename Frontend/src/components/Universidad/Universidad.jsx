import './Universidad.css';

export const Universidad = () => {
	return (
		<div>
			<section className="section-anuncio">
				<div
					id="carouselExampleSlidesOnly"
					className="carousel slide"
					data-bs-ride="carousel"
				>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								src="https://universidadazteca.edu.mx/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-11-at-09.35.17.jpeg"
								className="d-block w-80"
								alt="..."
							/>
						</div>
						<div className="carousel-item">
							<img
								src="https://universidadazteca.edu.mx/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-11-at-09.35.17.jpeg"
								className="d-block w-80"
								alt="..."
							/>
						</div>
						<div className="carousel-item">
							<img
								src="https://universidadazteca.edu.mx/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-11-at-09.35.17.jpeg"
								className="d-block w-80"
								alt="..."
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="cards-anuncio">
				<div className="card-a">
					<h5>Quienes somos</h5>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Reprehenderit veritatis praesentium eos quis ab.
						Non dolorem corrupti nulla officiis, omnis itaque, ad
						illum quia saepe minima sint aspernatur! Impedit,
						sapiente?
					</p>
				</div>
				<div className="card-a">
					<h5>Historia</h5>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Cupiditate mollitia eaque officiis minima harum
						provident, hic, modi omnis voluptas autem dolores iusto
						eveniet reiciendis. Aliquam error odit maiores ipsa
						optio!
					</p>
				</div>
				<div className="card-a">
					<h5>Mision y vision</h5>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Amet, incidunt ea veritatis atque quaerat, cum
						consequuntur odio impedit velit, necessitatibus nisi
						vero. Beatae optio dolorem totam corporis maxime in
						praesentium.
					</p>
				</div>
			</section>
		</div>
	);
};
