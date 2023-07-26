import {useLocation} from 'react-router-dom';

export default function MovieDetailPage() {
	const location = useLocation();
	const movie = location.state.movie;
	const cast = movie.cast.join(', ')
	return (
		<div>
			<h1>{movie.title}</h1>
			<h2>{movie.releaseDate}</h2>
			<h3>{cast}</h3>
			<img src={movie.posterPath} alt="movie poster"/>
		</div>
	);
}