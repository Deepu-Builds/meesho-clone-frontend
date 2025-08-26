import NavMenu1 from "./NavMenu1";
import NavMenu2 from "./NavMenu2";

function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full">
        <NavMenu1 />
        <NavMenu2 />
      </div>
    </>
  );
}

export default Navbar;
