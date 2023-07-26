import {movies} from '../../data';
import MovieCard from '../../components/MovieCard';

export default function MovieListPage() {
	const allMovies = movies.map(movie => {
		return (
			<MovieCard movie={movie} key={movie.title}/>
		)
	});
	return (
		<div className={'movies'}>
			{allMovies}
		</div>
	);
}