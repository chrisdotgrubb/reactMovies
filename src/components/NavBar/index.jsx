import {NavLink} from 'react-router-dom';

export default function NavBar({user}) {
	return (
		<nav>
			<NavLink to={'/'}>Movies</NavLink>
			&nbsp;|&nbsp;
			<NavLink to={'/actors'}>Actors</NavLink>
			&nbsp;|&nbsp;
			<span>Hello {user}</span>
		</nav>
	);
}
