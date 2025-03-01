import { Link } from "react-router-dom";
import { BiLogoReact, BiMoon, BiSun, BiUser } from "react-icons/bi";
import PropTypes from 'prop-types';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="bg-slate-800 dark:bg-slate-900 shadow-lg flex items-center justify-around py-3 px-32 fixed top-0 left-0 w-full">
      <Link to="/">
        <span className="font-semibold text-lg flex items-center gap-3 text-blue-400">
          <BiLogoReact className="text-6xl" />
          <span className="font-semibold text-2xl">React Navigation Bar</span>
        </span>
      </Link>
      <div className="flex items-center gap-5 text-black">
        <Link to="/" className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300">
          Home
        </Link>
        <Link to="/about" className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300">
          About
        </Link>
        <Link to="/contact" className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300">
          Contact
        </Link>
        <Link to="/products" className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300">
          Products
        </Link>

        <Link to="/register" className="py-1 px-3 text-lg font-light text-white rounded-2xl hover:bg-slate-700 transition duration-300">
          <BiUser size={24} className="inline-block mr-2" />
          Register
        </Link>

        <button
          onClick={toggleTheme}
          className="text-white hover:text-sky-300"
          aria-label={`Переключить на ${theme === 'light' ? 'тёмную' : 'светлую'} тему`}
        >
          {theme === 'light' ? <BiMoon size={24} /> : <BiSun size={24} />}
        </button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Navbar;
