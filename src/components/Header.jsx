import Button from "./Button";
import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
  return (
    // header
    <header className="py-4 bg-headerBg dark:bg-gray-100 dark:text-gray-800">
      <div className="container h-16">
        <div className="flex justify-between items-center">
          {/* logo */}
          <Logo cls={"text-dark-dark1"} logo={"CareerHub"}></Logo>
          {/* menu */}
          <ul className="items-center hidden space-x-3 lg:flex">
            <Menu></Menu>
          </ul>
          {/* button */}
          <Button name="Start Applying"></Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
