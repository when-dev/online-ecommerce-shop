import Link from "next/link"
// import { useRouter } from "next/router";
import { CiBookmark, CiCircleList, CiHome, CiUser } from "react-icons/ci"
import Cart from "../desktop/Cart"

const navItems = [
  { href: "/", label: "Главная", icon: <CiHome className="w-6 h-6" /> },
  { href: "/", label: "Каталог", icon: <CiCircleList className="w-6 h-6" /> },
  { href: "/", label: "Корзина", icon: <Cart items={1} className="w-6 h-6" /> },
  { href: "/", label: "Избранное", icon: <CiBookmark className="w-6 h-6" /> },
  { href: "/", label: "Войти", icon: <CiUser className="w-6 h-6" /> }
];

const BottomBar = () => {
  // TODO: add router for active link highlighting
  // const router = useRouter();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-grey-200 flex justify-between items-center px-2 py-1 mb-1.5 lg:hidden shadow-[0_-5px_5px_-5px_rgba(0,0,0,0.1)]">
      {navItems.map(item => (
        <Link
          key={item.label}
          href={item.href}
          className="flex flex-col items-center flex-1 py-1"
        >
          <span className="mb-0.5 mt-1.5 flex items-center justify-center">
            {item.icon}
          </span>
          <span className="text-xs">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomBar;
