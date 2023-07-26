import './index.css';
import {useState} from 'react';
import LoginPage from '../LoginPage';
import NavBar from '../../components/NavBar';
import {Route, Routes} from 'react-router-dom';
import MovieListPage from '../MovieListPage';
import MovieDetailPage from '../MovieDetailPage';
import ActorListPage from '../ActorListPage';

export default function App() {
	const [user, setUser] = useState(1);
	
	return (
		<div className="App">
			{user ?
				<>
					<NavBar user={user}/>
					<Routes>
						<Route path={'/'} element={<MovieListPage/>} />
						<Route path={'/movies/:movieName'} element={<MovieDetailPage/>} />
						<Route path={'/actors'} element={<ActorListPage/>} />
					</Routes>
				</>
				:
				<LoginPage />
			}
		</div>
	);
}