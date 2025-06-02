import { FC } from "react";
import Input from "components/Input";
import Cart from "./Cart";
import Link from "next/link";
import GeoIcon from "public/img/geo-point.svg";
import Logo from "public/img/logo.svg";
import ArrowIcon from "public/img/arrow.svg";
import { FaHeart, FaThLarge, FaUser } from "react-icons/fa";

const staticLinks = [
  { name: "Доставка и оплата", link: "/" },
  { name: "Гарантия", link: "/" },
  { name: "Акции", link: "/" },
  { name: "Магазины", link: "/" }
];

const DesktopMenu: FC = () => {
  return (
    <div className="hidden lg:flex flex-col w-full">
      <div className="bg-grey-50 text-grey-500 w-full border-b border-grey-100">
        <div className="flex justify-between items-center h-12 max-w-7xl mx-auto text-sm px-4">
          <div className="flex items-center min-w-max">
            <Link href="/" className="w-20">
              <Logo />
            </Link>
            <div className="flex items-center space-x-3 ml-12">
              <button className="flex items-center hover:text-orange transition-colors text-sm">
                <GeoIcon className="w-3 h-3 mr-1" />
                Краснодар
                <ArrowIcon className="w-2 h-2 ml-1 rotate-[270deg]" />
              </button>
              <a
                href="tel:+79287775680"
                className="text-sm text-grey-500 hover:text-orange transition-colors"
              >
                +7 (928) 777-56-80
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            {staticLinks.map(({ name, link }) => (
              <Link
                href={link}
                key={name}
                className="text-sm text-grey-500 hover:text-orange transition-colors"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white h-16 mt-2 shadow-sm">
        <div className="grid grid-cols-[auto_1fr_auto] gap-2 items-center h-full max-w-7xl mx-auto px-2 sm:px-4 w-full">
          <div className="min-w-[170px] max-w-[210px]">
            <button
              className="
                hidden md:flex
                items-center w-full whitespace-nowrap 
                border border-orange rounded-md 
                text-orange text-sm xl:text-md font-regular
                hover:bg-orange hover:border-orange hover:text-white
                transition-colors
                px-6 py-2
              "
            >
              <FaThLarge className="w-4 h-4 mr-2" />
              Каталог товаров
            </button>
          </div>
          <div className="flex justify-center w-full px-2">
            <div className="w-full max-w-xl md:max-w-2xl">
              <Input placeholder="Поиск по товарам" type="text" error={false} />
            </div>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6 min-w-max">
            <button className="flex flex-col items-center text-grey-500 hover:text-orange transition-colors text-sm">
              <FaUser className="text-base md:text-lg" />
              <span className="text-xs">Войти</span>
            </button>
            <button className="flex flex-col items-center text-grey-500 hover:text-orange transition-colors text-sm">
              <FaHeart className="text-base md:text-lg" />
              <span className="text-xs">Избранное</span>
            </button>
            <Link href="/">
              <button className="flex flex-col items-center text-grey-500 hover:text-orange transition-colors text-sm">
                <Cart items={3} />
                <span className="text-xs">Корзина</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;
