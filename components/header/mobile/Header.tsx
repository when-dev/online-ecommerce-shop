import { FC, useState } from 'react';
import Link from "next/link";
import Tab from "./Tab";
import Dialog from "./Dialog";
import Logo from "public/img/logo.svg";
import BurgerIcon from "public/img/burger.svg";
import SearchIcon from "public/img/search.svg";
import CrossIcon from "public/img/cross.svg";


const MobileMenu: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-between h-14 px-4 w-full lg:hidden">
      <button className="w-6 h-6 z-10" onClick={() => setIsMenuOpen(true)}>
        <BurgerIcon />
      </button>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-16 z-0">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <button className="w-5 z-10">
        <SearchIcon />
      </button>

      <Dialog opened={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <div className="flex flex-col h-full bg-white">
          <div className="flex items-center justify-between h-14 px-4 border-b border-grey-100">
            <button className="w-5 h-5" onClick={() => setIsMenuOpen(false)}>
              <CrossIcon />
            </button>
            <div className="flex-1 flex justify-center md:hidden">
              <Logo className="w-20 h-auto" />
            </div>
            <button className="w-5 h-5 md:hidden">
              <SearchIcon />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <Tab
              onToggle={() => setIsCatalogOpen(prev => !prev)}
              isOpen={isCatalogOpen}
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default MobileMenu;