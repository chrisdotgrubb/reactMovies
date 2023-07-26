import {useParams} from 'react-router-dom';

export default function MovieDetailPage({movie}) {
	const {movieName} = useParams()
	return (
		<div>
			<h2>{movieName}</h2>
		</div>
	);
}