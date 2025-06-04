import Input from "components/Input";
import Link from "next/link";
import Logo from "public/img/logo.svg";
import { FC } from "react";
import {
  AiFillDollarCircle,
  AiOutlineHeart,
  AiOutlineUser
} from "react-icons/ai";
import { BiSolidNavigation } from "react-icons/bi";
import { BsLightningChargeFill } from "react-icons/bs";
import { PiDotsNineBold } from "react-icons/pi";
import { RiSunFill } from "react-icons/ri";
import {
  headerDesktopTopLinks,
  headerDesktopBottomLinks
} from "constants/navLinks";
import Cart from "./Cart";

const DesktopHeader: FC = () => {
  return (
    <div className="hidden lg:flex flex-col w-full">
      <div className="text-[#333] w-full text-sm h-10 flex items-center select-none">
        <div className="max-w-7xl mx-auto flex justify-between w-full px-4">
          <button className="flex items-center gap-2 text-xs">
            <BiSolidNavigation />
            Краснодар
          </button>
          <div className="flex items-center space-x-6">
            {headerDesktopTopLinks.map(({ name, link }) =>
              name === "Trade-in" ? (
                <Link
                  key={name}
                  href={link}
                  className="flex items-center gap-1 bg-[#222228] text-white rounded px-2 py-0.5 text-xs"
                  style={{ lineHeight: "22px" }}
                >
                  <AiFillDollarCircle className="w-4 h-4 text-[#ddddd7]" />
                  {name}
                </Link>
              ) : name === "Ремонт" ? (
                <Link
                  key={name}
                  href={link}
                  className="flex items-center gap-1 text-xs hover:text-[#222228]/70"
                >
                  <BsLightningChargeFill className="w-4 h-4 text-[#222228]" />
                  {name}
                </Link>
              ) : (
                <Link
                  href={link}
                  key={name}
                  className="transition-colors text-xs hover:text-[#222228]/70"
                >
                  {name}
                </Link>
              )
            )}
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="tel:+79184455111"
              className="text-xs font-semibold hover:text-[#222228]/70"
            >
              +7 (928) 777-55-11
            </a>
            <a href="#" className="transition text-xs hover:text-[#222228]/70">
              Заказать звонок
            </a>
          </div>
          <div className="flex items-center">
            <button className="text-md">
              <RiSunFill />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm h-[80px] flex items-center w-full">
        <div className="max-w-7xl mx-auto flex w-full px-4 items-center">
          <Link href="/" className="flex items-center mr-6 min-w-[120px]">
            <Logo className="w-32 h-auto" />
          </Link>
          <button
            className="
              flex items-center bg-[#e84545] hover:bg-[#d02b2b]
              text-white font-medium rounded-md px-5 py-2.5 mr-6
              text-base transition
            "
          >
            <PiDotsNineBold className="w-6 h-6 mr-2" />
            Каталог
          </button>
          <div className="flex-1 mr-6">
            <Input placeholder="Искать: sony" type="text" error={false} />
          </div>
          <div className="flex items-center space-x-7">
            <button className="flex flex-col items-center text-[#222] hover:text-[#222]/70 transition">
              <AiOutlineUser className="w-6 h-6" />
              <span className="text-xs">Войти</span>
            </button>
            <button className="flex flex-col items-center text-[#222] hover:text-[#222]/70 transition">
              <AiOutlineHeart className="w-6 h-6" />
              <span className="text-xs">Избранное</span>
            </button>
            <button className="flex flex-col items-center text-[#222] hover:text-[#222]/70 transition">
              <Cart items={1} className="w-6 h-6" />
              <span className="text-xs">Корзина</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-[#e1e1e1] h-[44px]">
        <div className="max-w-7xl mx-auto flex items-center h-full px-4 space-x-8">
          {headerDesktopBottomLinks.map(({ name, icon, href }) => (
            <Link
              key={name}
              href={href}
              className="flex items-center text-sm text-[#222] hover:text-[#222]/70 transition"
            >
              <span className="mr-1">{icon}</span>
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
