import { NavLink } from 'react-router-dom';
import './style.scss';

const Nav = () => (
  <nav>
    <NavLink className="navigation__link" to="/">
      Home
    </NavLink>
  </nav>
);

export default Nav;
