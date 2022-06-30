import Link from "next/link";
// import Board from "./Board";
// import Nav from "./Nav";

function Header() {
  return (
    <header>
      <div className="to to mb-4 mt-2 flex justify-center bg-[#48CAE4] bg-gradient-to-r from-customblue p-4 text-4xl font-bold uppercase text-white md:text-6xl">
        <Link href="/">
          <a className="-skew-x-6">Kanban</a>
        </Link>
      </div>
      {/* <Nav /> */}
    </header>
  );
}

export default Header;
