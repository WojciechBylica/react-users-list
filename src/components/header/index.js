import { Nav } from '../index';
import './style.css';

const Header = () => (
  <header className="header">
    <div className="header__box">
      <h1 className="header__title">
        Users List <img width={50} height={50} alt="logo" src="/logo.png" />
      </h1>
      <Nav />
    </div>
  </header>
);

export default Header;
