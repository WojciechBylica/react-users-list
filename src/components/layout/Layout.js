import Footer from '../footer/Footer';
import Header from '../header/Header';
import './style.css';

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
