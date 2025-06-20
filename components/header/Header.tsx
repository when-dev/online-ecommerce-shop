import { FC } from "react";
import MobileMenu from "./mobile/Header";
import DesktopMenu from "./desktop/Header";

// TODO: substitude css layout hiding with rendering

const Header: FC = () => {
  return (
    <header className="flex items-center bg-white border-grey-100 lg:border-b-0">
      <MobileMenu />
      <DesktopMenu />
    </header>
  );
};

export default Header;
