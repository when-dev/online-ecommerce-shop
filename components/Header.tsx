import type { FC } from "react";
import Logo from "public/img/logo.svg";
import SearchIcon from "public/img/search.svg";
import BurgerIcon from "public/img/burger.svg";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header className="relative flex items-center justify-between px-4 h-14 bg-white border-b border-grey-100">
      <button className="text-grey-300 w-5 z-10">
        <BurgerIcon />
      </button>

      <div className="absolute left-1/2 transform -translate-x-1/2 w-20 z-0">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <button className="text-grey-300 w-5 z-10">
        <SearchIcon />
      </button>
    </header>
  );
};

export default Header;
