import { Nav } from '../index';
import './style.scss';
import image from './logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="header__box">
      <NavLink className="navigation__link navigation__link--header" to="/">
        <h1 className="header__title">
          <img width={50} height={50} alt="logo" src={image} />
          Users List
        </h1>
      </NavLink>
      <Nav />
    </div>
  </header>
);

export default Header;
