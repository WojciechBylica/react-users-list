import { Nav } from '../index';
import './style.css';
import image from './logo.png';

const Header = () => (
  <header className="header">
    <div className="header__box">
      <h1 className="header__title">
        <img width={50} height={50} alt="logo" src={image} />
        Users List
      </h1>
      <Nav />
    </div>
  </header>
);

export default Header;
