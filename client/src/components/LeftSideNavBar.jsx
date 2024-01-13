import { NavLink } from "react-router-dom";
import { RiShutDownLine } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import Logo from "../assets/Logo.png";
import StatBoard from "../assets/StatBoard.png";
import GridIcon from "../assets/Circled Menu.png";
import SupportIcon from "../assets/Support.png";
import PluginIcon from "../assets/Puzzle.png";
import HelpIcon from "../assets/Help.png";

const navLinks = [
  { label: "Dashboard", to: "/dashboard", icon: GridIcon },
  { label: "Support", to: "/support", icon: SupportIcon },
  { label: "Plugins", to: "/plugins", icon: PluginIcon },
  { label: "Help", to: "/help", icon: HelpIcon },
];

export const LeftSideNavBar = ({ isOpen, toggleNav }) => {
  return (
    <nav className={`nav ${isOpen ? "opened" : "closed"} relative`}>
      {/* CLOSE SIDEBAR BUTTON */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute -right-10 top-6 bg-black/60 rounded-full shadow-lg`}
      >
        <button
          onClick={toggleNav}
          className="active:ring-2 lg:hidden rounded ring-gray-300 p-1 transition-all"
        >
          <CgClose className="text-2xl text-white" />
        </button>
      </div>
      {/* LOGO */}
      <div className="flex flex-col items-center justify-center w-full py-16">
        <img src={Logo} alt="Logo" />
        <span className="text-[#cbcbcb] font-bold text-xl mt-2">
          <img src={StatBoard} alt="StatBoard " />
        </span>
      </div>
      {/* NAVLINKS */}
      <div className="flex-1 w-full flex flex-col gap-4">
        {navLinks?.map(({ label, to, icon }) => (
          <NavLink
            to={to}
            key={label}
            onClick={toggleNav}
            className="bg-tertiary-bg text-white hover:bg-white/10 hover:text-white active:bg-white active:text-black px-8 py-4 ml-12 flex items-center gap-2 rounded-l-xl"
          >
            <img src={icon} alt="Nav-Link" />
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
      {/* LOGOUT BUTTON */}
      <div className="w-full flex items-center justify-center bg-white text-red-600">
        <button className="flex items-center justify-center gap-2 p-2">
          <span>Logout</span>
          <RiShutDownLine />{" "}
        </button>
      </div>
    </nav>
  );
};
