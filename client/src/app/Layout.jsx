import { Outlet } from "react-router-dom";
import { LeftSideNavBar } from "../components/LeftSideNavBar";
import { useApp } from "../context/AppContext";

const Layout = () => {
  const { isNavOpen, toggleNav } = useApp();
  return (
    <div className="flex">
      <LeftSideNavBar isOpen={isNavOpen} toggleNav={toggleNav} />
      <section
        className={`flex-1 w-full lg:ml-60  transition-all duration-300 ease-in-out`}
      >
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
