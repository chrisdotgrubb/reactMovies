import {Link, useLocation} from 'react-router-dom';

export default function MovieDetailPage() {
	const location = useLocation();
	const movie = location.state.movie;
	const cast = movie.cast.join(', ')
	const allCast = movie.cast.map(actor => {
		console.log(actor)
		return (
			<>
				<span>
					<Link to={`/actors/${actor}`} state={{actor}}>
						{actor}
					</Link>, </span>
			</>
		)
	});
	return (
		<div>
			<h1>{movie.title}</h1>
			<h2>{movie.releaseDate}</h2>
			<div>{allCast}</div>
			<img src={movie.posterPath} alt="movie poster"/>
		</div>
	);
}