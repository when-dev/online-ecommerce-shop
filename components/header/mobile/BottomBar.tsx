import Link from "next/link";
// import { useRouter } from "next/router";
import {
  FaHome,
  FaThLarge,
  FaShoppingCart,
  FaHeart,
  FaUser
} from "react-icons/fa";

const navItems = [
  { href: "/", label: "Главная", icon: <FaHome /> },
  { href: "/", label: "Каталог", icon: <FaThLarge /> },
  { href: "/", label: "Корзина", icon: <FaShoppingCart /> },
  { href: "/", label: "Избранное", icon: <FaHeart /> },
  { href: "/", label: "Войти", icon: <FaUser /> }
];

const BottomBar = () => {
	// TODO: add router for active link highlighting
  // const router = useRouter();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-grey-200 flex justify-between items-center px-2 py-1 lg:hidden">
      {navItems.map(item => (
        <Link
          key={item.label}
          href={item.href}
          className="flex flex-col items-center flex-1 py-1"
        >
          <span className="text-xl mb-0.5">{item.icon}</span>
          <span className="text-xs">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomBar;
