export default function MovieCard({movie}) {
	return (
		<div className={'card'} style={{backgroundImage: `url(${movie.posterPath})`}}>
			<div>
				<h3>{movie.title}</h3>
			</div>
			<div>
				<h4>{movie.releaseDate}</h4>
			</div>
		</div>
	)
}