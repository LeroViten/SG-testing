import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/" className="link">
        Auth
      </NavLink>
      <NavLink to="/posts" className="link">
        Posts
      </NavLink>
      <NavLink to="/ranges" className="link">
        Ranges
      </NavLink>
    </nav>
  );
}
