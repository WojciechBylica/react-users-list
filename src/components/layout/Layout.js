import Footer from '../footer/Footer';
import Header from '../header/Header';
import './style.scss';

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
