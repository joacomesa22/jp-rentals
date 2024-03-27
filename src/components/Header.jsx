import { useState } from "react";
import { wrapper } from "../styles/styling";

const NavBar = ({ dark = false, gradient = true }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header
      id="navbar"
      className={`fixed w-full z-40 ${
        dark && "text-[var(--darkest)]"
      } flex justify-center items-center`}
    >
      {gradient && (
        <div className="absolute w-full h-full bg-gradient-to-b from-black/60 -z-10"></div>
      )}

      <div
        className={`${wrapper} w-full flex justify-between items-center p-4`}
      >
        <div className="hover:scale-105 duration-300">
          <a href="/">JP</a>
        </div>
        <ul className="hidden sm:flex gap-8">
          <li className="">
            <a href="/nuestras-unidades" className="">
              Nuestras Unidades
            </a>
          </li>
          <li className="">
            <a href="/nosotros" className="">
              Nosotros
            </a>
          </li>
          <li className="">
            <a href="/como-funciona" className="">
              Cómo Funciona
            </a>
          </li>
          <li className="">
            <a href="/contacto" className="">
              Contacto
            </a>
          </li>
        </ul>
      </div>
      <div onClick={handleNav} className="block sm:hidden">
        {!nav ? (
          <img src="./assets/icons/bars.svg" alt="bars" className="w-[40px]" />
        ) : (
          <img src="./assets/icons/xmark.svg" alt="bars" className="w-[40px]" />
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed left-[-100%] top-0 h-full w-[60%] border-r border-r-[var(--lightBlue)] bg-[var(--darkest)] flex flex-col items-center justify-around z-10"
            : "fixed left-0 top-0 h-full w-[60%] border-r border-r-[var(--lightBlue)] bg-[var(--darkest)] ease-in-out duration-500 flex flex-col items-center justify-around z-10"
        }
      >
        <ul className="flex flex-col gap-8 items-center bg-[var(--darkest)]">
          <li className="p-4">
            <a
              href="/nuestras-unidades"
              className="navLink"
              onClick={handleNav}
            >
              Nuestras Unidades
            </a>
          </li>
          <li className="p-4">
            <a href="/nosotros" className="navLink" onClick={handleNav}>
              Nosotros
            </a>
          </li>
          <li className="p-4">
            <a href="/como-funciona" className="navLink" onClick={handleNav}>
              Cómo Funciona
            </a>
          </li>
          <li className="p-4">
            <a href="/contacto" className="navLink" onClick={handleNav}>
              Contacto
            </a>
          </li>
        </ul>
        <div className="hover:scale-105 duration-300">
          <a href="/">
            <img src="./assets/logo.svg" alt="logo" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
