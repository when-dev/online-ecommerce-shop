import { FC } from "react";
import ArrowIcon from "public/img/arrow.svg";

const Tab: FC<{ onToggle?: () => void; isOpen?: boolean }> = ({
  onToggle,
  isOpen
}) => {
  return (
    <>
      <button className="flex py-3 px-5 items-center w-full" onClick={onToggle}>
        <p className="flex-1 text-left text-base">Каталог</p>
        <span
          className={`
            text-grey-400 transform transition-transform duration-300 w-1.5
            ${isOpen ? "rotate-0" : "-rotate-90"}
          `}
        >
          <ArrowIcon />
        </span>
      </button>
      {isOpen && (
        <div className="pl-12 flex flex-col gap-2 text-sm text-left">
          <button className="py-1 text-left">Телефоны</button>
          <button className="py-1 text-left">Ноутбуки</button>
          <button className="py-1 text-left">Планшеты</button>
        </div>
      )}
    </>
  );
};

export default Tab;