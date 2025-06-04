import Link from "next/link";
import Logo from "public/img/logo.svg";
import { FC, useState } from "react";
import { BiSolidNavigation } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { RiSunFill } from "react-icons/ri";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import Dialog from "./Dialog";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiFillDollarCircle
} from "react-icons/ai";
import { BsLightningChargeFill } from "react-icons/bs";
import Cart from "../desktop/Cart";
import ArrowSvg from "public/img/arrow.svg";

const userLinks = [
  {
    href: "#",
    label: "Кабинет",
    icon: <AiOutlineUser className="w-6 h-6" />
  },
  {
    href: "#",
    label: "Избранное",
    icon: <AiOutlineHeart className="w-6 h-6" />
  },
  {
    href: "#",
    label: "Корзина",
    icon: <Cart items={1} className="w-6 h-6" />
  }
];

const serviceLinks = [
  {
    href: "#",
    label: (
      <span className="flex items-center gap-2 bg-[#222228] text-white rounded text-sm w-max font-medium"> 
        <AiFillDollarCircle className="w-4 h-4 text-[#ddddd7]" />
        Trade-in
      </span>
    ),
    className:
      "bg-[#222228] text-white rounded px-2 py-1 text-sm w-max font-medium"
  },
  {
    href: "#",
    label: "Ремонт",
    icon: <BsLightningChargeFill className="w-5 h-5 text-[#222228]" />
  },
  {
    href: "#",
    label: "Акции"
  },
  {
    href: "#",
    label: "Услуги",
    rightIcon: <ArrowSvg className="w-2 h-2 transform rotate-180" />
  },
  {
    href: "#",
    label: "Компания",
    rightIcon: <ArrowSvg className="w-2 h-2 transform rotate-180" />
  },
  {
    href: "#",
    label: "Магазин"
  }
];

const MobileMenu: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative flex items-center shadow-sm justify-between h-14 px-4 w-full lg:hidden">
      <button className="z-10" onClick={() => setIsMenuOpen(true)}>
        <RxHamburgerMenu className="w-6 h-6" />
      </button>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-24 z-0">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <button className="z-10">
        <CiSearch className="w-6 h-6" />
      </button>

      <Dialog opened={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <div className="flex flex-col h-full bg-white w-full">
          <div className="flex items-center justify-between h-14 px-4">
            <span className="flex items-center gap-1 text-base">
              <BiSolidNavigation className="w-5 h-5" />
              Краснодар
            </span>
            <button className="w-8 h-8" onClick={() => setIsMenuOpen(false)}>
              <RxCross2 className="w-7 h-7" />
            </button>
          </div>

          <div className="px-4 py-3">
            <button className="w-full bg-[#e84545] text-white rounded-md py-3 text-base font-semibold shadow hover:bg-[#d02b2b] transition">
              Каталог
            </button>
          </div>

          <div className="flex flex-col gap-1 px-4 pb-3">
            {userLinks.map(item => (
              <Link
                key={
                  typeof item.label === "string"
                    ? item.label
                    : JSON.stringify(item.label)
                }
                href={item.href}
                className="flex items-center gap-3 py-2 text-sm"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-grey-100/10 my-2" />

          <div className="flex flex-col gap-2 px-4 py-3">
            {serviceLinks.map(item => (
              <Link
                key={
                  typeof item.label === "string"
                    ? item.label
                    : JSON.stringify(item.label)
                }
                href={item.href}
                className={
                  "flex items-center gap-2 py-2 text-sm " +
                  (item.className || "")
                }
              >
                {item.icon}
                {item.label}
                {item.rightIcon && (
                  <span className="ml-auto">{item.rightIcon}</span>
                )}
              </Link>
            ))}
          </div>

          <div className="border-t border-grey-100/10 my-2" />

          <div className="px-4 py-3 text-sm flex flex-col gap-2">
            <Link
              href="tel:+79287775511"
              className="py-2 text-base flex items-center justify-between"
            >
              +7 (928) 777-55-11
              <ArrowSvg className="w-2 h-2 transform rotate-180" />
            </Link>
            <div>г. Краснодар, OZ Молл, 2 этаж</div>
            <Link href="#" className="flex items-center gap-2 mt-2">
              <FaWhatsapp className="w-6 h-6 text-green " />
            </Link>
          </div>

          <div className="border-t border-grey-100/10 my-2" />

          <button className="flex items-center gap-2 px-4 py-2 text-base">
            <RiSunFill className="w-5 h-5" /> Темная тема
          </button>
        </div>
      </Dialog>
    </div>
  );
};

export default MobileMenu;
