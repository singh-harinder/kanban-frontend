import Link from "next/link";
import { useState } from "react";
import { useUserQuery } from "../types/generated-queries";
import DisplayError from "./ErrorMessage";

function Nav() {
  const user = useUserQuery();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (user.loading) return <p>Loading...</p>;
  if (user.error) return <DisplayError error={user.error} />;

  return (
    <div>
      <div className="m-0 flex h-full w-full flex-col bg-white shadow-lg">
        <div className="relative m-2 flex items-center justify-center border-b-4 p-10  text-2xl font-extrabold">
          <Link href="/">Kanban</Link>
        </div>
        <div className="relative m-2 flex flex-col items-center justify-center text-[#94a3b8]">
          <div className="p-2">
            <Link href="/">Board </Link>
          </div>
          <div className="p-2">
            <Link href="/">About</Link>
          </div>
          <div className="p-2">
            <Link href="/">Page</Link>
          </div>
        </div>
      </div>

      {/*  */}
      {/* <div className="flex cursor-pointer justify-center md:hidden">
        <button type="button" className="mt-4" onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav className="mt-2 mb-10 p-2 font-bold uppercase sm:block md:hidden">
          <ul>
            <li className="flex justify-center p-2 hover:text-custompurple">
              <Link href="/board">Create a new Board</Link>
            </li>
            <li className="flex justify-center p-2 hover:text-custompurple">
              <Link href="/createsection">Create a new Section</Link>
            </li>
          </ul>
        </nav>
      )} */}
    </div>
  );
}

export default Nav;
