import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

const Header = async () => {
  return (
    <header className="z-99 fixed top-0 left-0 w-screen container-x py-6 flex justify-between items-center bg-slate-800/50 shadow duration-300">
      <HeaderLogo />
      <HeaderNav />
    </header>
  );
};

export default Header;
