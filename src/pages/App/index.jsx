import './index.css';
import {movies} from '../../data';
import {useState} from 'react';
import LoginPage from '../LoginPage';
import NavBar from '../../components/NavBar';
import {Route, Routes} from 'react-router-dom';
import MovieListPage from '../MovieListPage';
import MovieDetailPage from '../MovieDetailPage';
import ActorListPage from '../ActorListPage';
import ActorDetailPage from '../ActorDetailPage';

export default function App() {
	const [user, setUser] = useState(null);
	const uniqueActors = new Set();
	movies.forEach(m => m.cast.forEach(a => uniqueActors.add(a)));
	
	return (
		<div className="App">
			{user ?
				<>
					<NavBar user={user} setUser={setUser}/>
					<Routes>
						<Route path={'/'} element={<MovieListPage movies={movies}/>}/>
						<Route path={'/movies/:movieName'} element={<MovieDetailPage/>}/>
						<Route path={'/actors'} element={<ActorListPage actors={[...uniqueActors]}/>}/>
						<Route path={'/actors/:actorName'} element={<ActorDetailPage/>}/>
					</Routes>
				</>
				:
				<LoginPage setUser={setUser}/>
			}
		</div>
	);
}
