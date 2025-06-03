import { FC, useState } from "react";
import Link from "next/link";
import Tab from "./Tab";
import Dialog from "./Dialog";
import Logo from "public/img/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";

const MobileMenu: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  return (
    <div className="relative flex items-center shadow-sm justify-between h-14 px-4 md:px-6 w-full lg:hidden">
      <button className="z-10" onClick={() => setIsMenuOpen(true)}>
        <RxHamburgerMenu className="w-6 h-6" />
      </button>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-16 z-0">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <button className="z-10">
        <CiSearch className="w-6 h-6" />
      </button>

      <Dialog opened={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <div className="flex flex-col h-full bg-white">
          <div className="flex items-center justify-between h-14 px-4 border-b border-grey-100/25">
            <button className="w-5 h-5" onClick={() => setIsMenuOpen(false)}>
              <RxCross2 className="w-6 h-6" />
            </button>
            <div className="flex-1 flex justify-center md:hidden">
              <Logo className="w-20 h-auto" />
            </div>
            <button className="w-5 h-5 md:hidden">
              <CiSearch className="w-6 h-6" />
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
