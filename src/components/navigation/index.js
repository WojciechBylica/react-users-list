import { Link } from 'react-router-dom';
import './style.css';

const Nav = () => (
  <nav>
    <Link className="navigation__link" to="/">
      Home
    </Link>
  </nav>
);

export default Nav;
