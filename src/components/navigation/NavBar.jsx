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
    <header className="nav-header relative mb-5 md:w-[30%] xl:w-[20%] md:fixed top-0 md:h-screen md:overflow-y-scroll">
      <nav className="p-5 md:mt-0 flex items-center justify-between md:justify-center">
        <button type="button" className="menu-btn md:hidden" onClick={openMenu}>
          <RiMenu4Fill className="text-2xl" />
        </button>
        <Link to="/" className="uppercase font-bold md:text-xl lg:text-2xl">
          Covid-Metrics
        </Link>
      </nav>
      <ul className="menu-list w-0 md:w-full" ref={ul}>
        <li className="item-list">
          <NavLink to="/dashboard" className={`nav-link ${(isActive) => (isActive ? 'active' : '')}`} onClick={openMenu}>
            World Data
          </NavLink>
        </li>
        <li className="item-list">
          <NavLink to="/category/africa" className={`nav-link ${(isActive) => (isActive ? 'active' : '')}`} onClick={openMenu}>
            Africa
          </NavLink>
        </li>
        <li className="item-list">
          <NavLink to="/category/asia" className={`nav-link ${(isActive) => (isActive ? 'active' : '')}`} onClick={openMenu}>
            Asia
          </NavLink>
        </li>
        <li className="item-list">
          <NavLink to="/category/australia" className="nav-link flex-col" onClick={openMenu}>
            Australia/Oceania
          </NavLink>
        </li>
        <li className="item-list">
          <NavLink to="/category/europe" className={`nav-link ${(isActive) => (isActive ? 'active' : '')}`} onClick={openMenu}>
            Europe
          </NavLink>
        </li>
        <li className="item-list">
          <NavLink to="/category/northamerica" className={`nav-link ${(isActive) => (isActive ? 'active' : '')}`} onClick={openMenu}>
            North America
          </NavLink>
        </li>
        <li className="item-list">
          <NavLink to="/category/southamerica" className={`nav-link ${(isActive) => (isActive ? 'active' : '')}`} onClick={openMenu}>
            South America
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
