import Nav from "./Nav";
import TopBar from "./TopBar";

function Header() {
  return (
    <div className="flex h-full">
      <Nav />
      <TopBar />
    </div>
  );
}

export default Header;
