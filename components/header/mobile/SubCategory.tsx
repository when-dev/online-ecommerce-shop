import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  close,
  goBack,
  openCategory
} from "../../../redux/slices/submenuSlices";
import Tab from "./Tab";
import { Category } from "../../../constants/categories";
import ArrowSvg from "public/img/arrow.svg";
import { FiArrowRight } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const SubCategory: FC<{ categories: Category[] }> = ({ categories }) => {
  const dispatch = useAppDispatch();
  const stack = useAppSelector(s => s.submenu.stack);

  const parents = [{ label: "Каталог", children: categories }, ...stack];
  const currentLevel = parents.length - 1;

  return (
    <div className="flex flex-col w-full h-full bg-white">
      <div className="relative flex-1 flex overflow-hidden bg-white">
        <div
          className="flex flex-row transition-transform duration-300 ease-in-out w-full h-full"
          style={{
            width: `${parents.length * 100}%`,
            transform: `translateX(-${currentLevel * 100}%)`,
            minHeight: 0
          }}
        >
          {parents.map((parent, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full h-full flex flex-col sm:max-w-[380px] max-w-full bg-white"
              style={{
                width: "100%",
                minWidth: "100%",
                pointerEvents: idx === currentLevel ? "auto" : "none"
              }}
              aria-hidden={idx !== currentLevel}
            >
              <div className="flex items-center px-5 h-16">
                <button
                  className="flex items-center text-gray-800 text-[16px] font-normal mr-2"
                  onClick={() =>
                    idx === 0 ? dispatch(close()) : dispatch(goBack())
                  }
                >
                  <ArrowSvg className="w-3 h-3 mr-1" />
                  <span className="ml-0.5">Назад</span>
                </button>
                <div className="flex-1 text-center text-xl font-bold"></div>
                <button
                  className="text-3xl font-light text-gray-800 ml-auto"
                  onClick={() => dispatch(close())}
                >
                  <RxCross2 className="w-7 h-7" />
                </button>
              </div>
              <div className="px-7 mt-3 mb-6 flex items-center gap-1">
                <span className="font-semibold text-md">{parent.label}</span>
                <FiArrowRight className="ml-2 w-4 h-4" />
              </div>
              <nav className="flex-1 overflow-y-auto px-7 pb-8">
                {(parent.children || []).map((cat: Category) => (
                  <Tab
                    key={cat.slug}
                    label={cat.label}
                    hasChildren={!!cat.children}
                    onClick={
                      cat.children
                        ? () => dispatch(openCategory(cat))
                        : undefined
                    }
                    href={cat.href}
                    isActive={false}
                  />
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubCategory;