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
        <div className="relative m-2 flex items-center justify-start border-b-4 p-4 text-2xl font-extrabold">
          <Link href="/">Kanban</Link>
        </div>
        <div className="relative m-2 flex flex-col items-start justify-start border-b-4 text-[#94a3b8]">
          <div className="p-2 hover:text-custompurple">
            <Link href="/">Home</Link>
          </div>
          <div className="p-2 hover:text-custompurple">
            <Link href="/">My Tasks</Link>
          </div>
          <div className="p-2 hover:text-custompurple">
            <Link href="/">Profile</Link>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col border-b-4">
          <div className="relative flex items-start justify-between p-4 text-[#94a3b8]">
            <span>Board</span>
            <Link href="/createboard">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer hover:text-custompurple"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
          </div>
          <div className="mt-4 p-1">
            {user.data?.authenticatedItem?.board?.map((board) => (
              <Link href={`/board/${board.id}`} key={board.id}>
                <a className="mt-4 flex justify-start pl-4 font-bold hover:text-custompurple">{board.name}</a>
              </Link>
            ))}
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
