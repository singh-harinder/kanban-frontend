import { useState } from "react";

function TopBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative mb-3 flex flex-wrap items-center justify-between border-b-4 bg-white px-2 py-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
            <button
              className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-[#94a3b8] outline-none focus:outline-none lg:hidden"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              Menu
            </button>
          </div>
          <div
            className={"flex-grow items-center lg:flex" + (navbarOpen ? " flex" : " hidden")}
            id="example-navbar-danger"
          >
            <ul className="flex list-none flex-col lg:ml-auto lg:flex-row">
              <li className="nav-item">
                <a
                  className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-[#94a3b8] hover:opacity-75"
                  href="/profile"
                >
                  <i className="fab fa-facebook-square leading-lg text-lg text-[#94a3b8] opacity-75"></i>
                  <span className="ml-2">Profile</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-[#94a3b8] hover:opacity-75"
                  href="/settings"
                >
                  <i className="fab fa-twitter leading-lg text-lg text-[#94a3b8] opacity-75"></i>
                  <span className="ml-2">Notifications</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-[#94a3b8] hover:opacity-75"
                  href="/placeholder"
                >
                  <i className="fab fa-pinterest leading-lg text-lg text-[#94a3b8] opacity-75"></i>
                  <span className="ml-2">Search</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default TopBar;
