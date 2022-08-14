import { ReactNode } from "react";
import Nav from "./Nav";
import TopBar from "./TopBar";

interface PageProps {
  children: ReactNode;
}

function Page({ children }: PageProps) {
  return (
    <div className="flex h-screen">
      <Nav />
      <div className="w-full">
        <TopBar />
        {children}
      </div>
    </div>
  );
}

export default Page;
