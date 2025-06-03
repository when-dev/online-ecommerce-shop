import Link from "next/link";
// import { useRouter } from "next/router";
import {
  FaHome,
  FaThLarge,
  FaShoppingCart,
  FaHeart,
  FaUser
} from "react-icons/fa";
import Cart from "../desktop/Cart";

const navItems = [
  { href: "/", label: "Главная", icon: <FaHome /> },
  { href: "/", label: "Каталог", icon: <FaThLarge /> },
  { href: "/", label: "Корзина", icon: <Cart items={3} /> },
  { href: "/", label: "Избранное", icon: <FaHeart /> },
  { href: "/", label: "Войти", icon: <FaUser /> }
];

const BottomBar = () => {
  // TODO: add router for active link highlighting
  // const router = useRouter();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-grey-200 flex justify-between items-center px-2 py-2 mb-1 lg:hidden shadow-[0_-5px_5px_-5px_rgba(0,0,0,0.1)]">
      {navItems.map(item => (
        <Link
          key={item.label}
          href={item.href}
          className="flex flex-col items-center flex-1 py-1"
        >
          <span className="text-xl mb-0.5 mt-1.5">{item.icon}</span>
          <span className="text-xs">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomBar;
