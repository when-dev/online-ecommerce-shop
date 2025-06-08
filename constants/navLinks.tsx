import {
  AiFillDollarCircle,
  AiOutlineHeart,
  AiOutlineUser
} from "react-icons/ai";
import {
  BsLightningChargeFill,
  BsNintendoSwitch,
  BsPhone
} from "react-icons/bs";
import { CgGames } from "react-icons/cg";
import { FaApple } from "react-icons/fa";
import { IoTabletLandscapeSharp, IoWatchOutline } from "react-icons/io5";
import { MdLaptopChromebook } from "react-icons/md";
import { TbBrandBeats } from "react-icons/tb";
import { RiHome2Line, RiListUnordered } from "react-icons/ri";
import ArrowSvg from "public/img/arrow.svg";
import Cart from "components/header/desktop/Cart";

export const headerDesktopTopLinks = [
  { name: "Trade-in", link: "#" },
  { name: "Ремонт", link: "#" },
  { name: "Акции", link: "#" },
  { name: "Как купить", link: "#" },
  { name: "Услуги", link: "#" },
  { name: "Компания", link: "#" },
  { name: "Магазины", link: "#" }
];

export const headerDesktopBottomLinks = [
  { name: "Apple", icon: <FaApple />, href: "#" },
  { name: "Samsung", icon: <BsPhone />, href: "#" },
  { name: "Galaxy Tab", icon: <IoTabletLandscapeSharp />, href: "#" },
  { name: "Laptops", icon: <MdLaptopChromebook />, href: "#" },
  { name: "Watch", icon: <IoWatchOutline />, href: "#" },
  { name: "Beats", icon: <TbBrandBeats />, href: "#" },
  { name: "Nintendo Switch", icon: <BsNintendoSwitch />, href: "#" },
  { name: "PlayStation", icon: <CgGames />, href: "#" }
];

export const bottomBarLinks = [
  { href: "/", label: "Главная", icon: <RiHome2Line className="w-6 h-6" /> },
  {
    href: "/",
    label: "Каталог",
    icon: <RiListUnordered className="w-6 h-6" />
  },
  { href: "/", label: "Корзина", icon: <Cart items={1} className="w-6 h-6" /> },
  {
    href: "/",
    label: "Избранное",
    icon: <AiOutlineHeart className="w-6 h-6" />
  },
  { href: "/", label: "Войти", icon: <AiOutlineUser className="w-6 h-6" /> }
];

export const headerMobileUserLinks = [
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

export const headerMobileServiceLinks = [
  {
    href: "#",
    label: (
      <span className="flex items-center gap-1 bg-[#222228] text-white rounded px-2 py-1 text-xs">
        <AiFillDollarCircle className="w-4 h-4 text-[#ddddd7]" />
        Trade-in
      </span>
    ),
  },
  {
    href: "#",
    label: "Ремонт",
    icon: <BsLightningChargeFill className="w-4 h-4 text-[#222228]" />
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
