import twitter from "../assets/img/twitter.png";
import discord from "../assets/img/discord.png";
import ship from "../assets/img/sailboat.png";
import menu from "../assets/img/align-left.png";
import Image from "next/image";
import { useState } from "react";
const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  console.log(openNav);
  const openMenu = () => {
    setOpenNav(true);
  };
  const closeMenu = () => {
    setOpenNav(false);
  };
  return (
    <nav>
      <div className="toggler" onClick={openMenu}>
        <Image src={menu} alt="" />
      </div>
      <ul className={openNav ? "menu open-menu" : "menu"} onClick={closeMenu}>
        <h2>NippleVerse</h2>
        <li>
          <a href="#banner">About</a>
        </li>
        <li>
          <a href="#feature">Featured</a>
        </li>
        <li>
          <a href="#roadmap">Roadmap</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        <li>
          <a href="#four">Connect Wallet</a>
        </li>
      </ul>
      <ul className="logo-icons">
        <li>
          <a href="https://discord.gg/nippleverse">
            <Image src={discord} alt="" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/nippleverse">
            <Image src={twitter} alt="" />
          </a>
        </li>

        <li>
          <a href="https://opensea.io/collection/nippleverse">
            <Image src={ship} alt="" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
