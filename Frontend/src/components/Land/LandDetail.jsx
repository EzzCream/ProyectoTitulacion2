// eslint-disable-next-line react/prop-types
export const LandDetail = ({ name, subjectId }) => {
	return (
		<div className="card">
			<div className="content">
				<p className="heading">{name}</p>
				<p className="para para-sm">{subjectId}</p>
			</div>
		</div>
	);
};
