import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';
import {routes} from '../Components/utils/routes';

const Navbar = () => {
  const { state, toggleTheme } = useContext(ContextGlobal);

  return (
    <nav className={state.theme}>
      <Link to={routes.home}>Home</Link>
      <Link to={routes.contact}>Contact</Link>
      <Link to={routes.favs}>Favs</Link>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  );
}

export default Navbar;
