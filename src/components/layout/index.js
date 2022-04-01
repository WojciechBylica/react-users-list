import Footer from '../footer';
import Header from '../header';
import './style.css';

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
