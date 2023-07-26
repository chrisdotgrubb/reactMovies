import {movies} from '../../data';
import MovieCard from '../../components/MovieCard';

export default function MovieListPage() {
	const allMovies = movies.map(movie => {
		return (
			<MovieCard movie={movie}/>
		)
	});
	return (
		<div className={'movies'}>
			{allMovies}
		</div>
	);
}