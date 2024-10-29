import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const LandDetail = ({ name, subjectId }) => {
	return (
		<Link to={`/materia/${subjectId}`} className="card link">
			<div className="content">
				<p className="heading">{name}</p>
				<p className="para para-sm">{subjectId}</p>
			</div>
		</Link>
	);
};
