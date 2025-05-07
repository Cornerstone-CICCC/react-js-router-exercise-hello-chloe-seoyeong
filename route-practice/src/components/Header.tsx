import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between mb-8 py-4">
      <div>LOGO</div>
      <nav>
        <menu className="flex items-center gap-2">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/products">PRODUCTS</Link>
          </li>
          <li>
            <Link to="/contact-us">CONTACT US</Link>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Header;
