import type { FC } from "react";
import Logo from "public/img/logo.svg";
import MenuIcon from "public/img/menu.svg";
import SearchIcon from "public/img/search.svg";
import BurgerIcon from "public/img/burger.svg";
import ArrowIcon from "public/img/arrow.svg";
import GeoIcon from "public/img/geo-point.svg";
import CartIcon from "public/img/cart.svg";
import Input from "../components/Input";
import Link from "next/link";

const staticLinks = [
  { name: "Доставка и оплата", link: "/" },
  { name: "Гарантия", link: "/" },
  { name: "Акции", link: "/" },
  { name: "Магазины", link: "/" }
];

const Cart: FC<{ items?: number }> = ({ items }) => {
  return (
    <button className="text-grey-300 w-8 relative">
      <div
        className={`absolute w-4 h-4 bg-red -right-1.5 -top-1 rounded-full text-white font-regular text-xs
        ${items ? "block" : "hidden"}`}
      >
        {Math.min(items as number, 99)}
      </div>
      <CartIcon />
    </button>
  );
};

const Header: FC = () => {
  return (
    <header className="flex items-center bg-white border-b border-grey-100 lg:border-b-0">
      <div className="relative flex items-center justify-between h-14 px-4 w-full lg:hidden">
        <button className="w-6 h-6 z-10">
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
      </div>
      <div className="hidden lg:flex flex-col w-full">
        <div className="bg-grey-50 text-grey-500 w-full border-b border-grey-100">
          <div className="flex justify-between items-center h-8 max-w-7xl mx-auto text-sm px-4">
            <div className="flex items-center space-x-6">
              {staticLinks.map(({ name, link }) => (
                <Link href={link} key={name} className="hover:underline">
                  {name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-6">
              <a href="tel:+79287775680" className="hover:underline">
                8-(928)-777-56-80
              </a>
              <button className="flex items-center hover:underline">
                <GeoIcon className="w-3 h-3 mr-1" />
                Донецк
              </button>
              <div className="relative group flex-shrink-0">
                <button className="flex items-center hover:underline">
                  Рус
                  <ArrowIcon className="w-2 h-2 ml-1 transform group-hover:-rotate-90 transition-transform" />
                </button>

                <div className="absolute right-0 top-full flex-col bg-white border border-grey-200 px-3 py-2 rounded shadow-md hidden group-hover:flex z-10 text-sm min-w-[60px] whitespace-nowrap">
                  <button className="hover:text-red">Eng</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white h-16 shadow-sm">
          <div className="flex justify-between items-center h-full max-w-7xl mx-auto px-4">
            <div className="flex items-center space-x-6 min-w-max">
              <Link href="/" className="w-20 text-red">
                <Logo />
              </Link>
              <button className="flex items-center text-black text-lg font-regular hover:text-grey-600 transition-colors hover:">
                <MenuIcon className="w-5 h-5 mr-2" />
                Каталог товаров
              </button>
            </div>
            <div className="flex-1 mx-6">
              <Input placeholder="Поиск по товарам" type="text" error={false} />
            </div>
            <Cart items={3} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
