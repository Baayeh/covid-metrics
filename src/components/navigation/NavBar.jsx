import React, { useRef } from 'react';
import { RiMenu4Fill } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  const ul = useRef();

  const openMenu = () => {
    if (ul.current.classList.contains('w-0')) {
      ul.current.classList.remove('w-0');
      ul.current.classList.add('w-full');
    } else {
      ul.current.classList.remove('w-full');
      ul.current.classList.add('w-0');
    }
  };

  return (
    <header className="nav-header relative mb-5">
      <nav className="p-5 flex items-center justify-between">
        <button type="button" className="menu-btn" onClick={openMenu}>
          <RiMenu4Fill className="text-2xl" />
        </button>
        <Link to="/" className="uppercase font-bold">
          Covid-Metrics
        </Link>
      </nav>
      <ul className="menu-list w-0" ref={ul}>
        <li className="item-list">
          <NavLink to="/dashboard" className="nav-link" onClick={openMenu}>
            World Data
          </NavLink>
        </li>
        <li className="item-list">
          <NavLink to="/category/africa" className="nav-link" onClick={openMenu}>
            Africa
          </NavLink>
        </li>
        <li className="item-list">
          <NavLink to="/category/asia" className="nav-link" onClick={openMenu}>
            Asia
          </NavLink>
        </li>
        <li className="item-list">
          <NavLink to="/category/australia" className="nav-link" onClick={openMenu}>
            Australia/Oceania
          </NavLink>
        </li>
        <li className="item-list">
          <NavLink to="/category/europe" className="nav-link" onClick={openMenu}>
            Europe
          </NavLink>
        </li>
        <li className="item-list">
          <NavLink to="/category/northamerica" className="nav-link" onClick={openMenu}>
            North America
          </NavLink>
        </li>
        <li className="item-list">
          <NavLink to="/category/southamerica" className="nav-link" onClick={openMenu}>
            South America
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
