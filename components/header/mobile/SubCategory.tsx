import { FC, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { close, goBack, openCategory, popStack } from "../../../redux/slices/submenuSlices";
import Tab from "./Tab";
import { Category } from "../../../constants/categories";
import ArrowSvg from "public/img/arrow.svg";
import { RxCross2 } from "react-icons/rx";

const ANIMATION_DURATION = 300;

const SubCategory: FC<{ categories: Category[] }> = ({ categories }) => {
  const dispatch = useAppDispatch();
  const stack = useAppSelector(s => s.submenu.stack);
  const slideIndex = useAppSelector(s => s.submenu.slideIndex);
  const prevSlideIndex = useRef(slideIndex);

  const parents = [{ label: "Каталог", children: categories }, ...stack];

  useEffect(() => {
    if (prevSlideIndex.current > slideIndex) {
      setTimeout(() => {
        dispatch(popStack());
      }, ANIMATION_DURATION);
    }
    prevSlideIndex.current = slideIndex;
  }, [slideIndex, dispatch]);

  return (
    <div className="flex flex-col w-full h-full bg-white overflow-hidden">
      <div className="relative flex-1 flex overflow-hidden bg-white">
        <div
          className="flex flex-row transition-transform duration-300 ease-in-out h-full"
          style={{
            width: `${parents.length * 100}%`,
            transform: `translateX(-${slideIndex * 100}%)`,
            minHeight: 0,
          }}
        >
          {parents.map((parent, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full h-full flex flex-col bg-white"
              style={{
                width: "100%",
                minWidth: "100%",
                pointerEvents: idx === slideIndex ? "auto" : "none",
              }}
              aria-hidden={idx !== slideIndex}
            >
              <div className="flex items-center h-14 px-4 border-b border-gray-100">
                <button
                  className="flex items-center text-gray-800 text-base font-normal mr-2"
                  onClick={() =>
                    idx === 0 ? dispatch(close()) : dispatch(goBack())
                  }
                >
                  <ArrowSvg className="w-4 h-4 mr-1 -rotate-180" />
                  <span>Назад</span>
                </button>
                <div className="flex-1 text-center text-lg font-bold"></div>
                <button
                  className="ml-auto text-3xl font-light text-gray-800"
                  onClick={() => dispatch(close())}
                >
                  <RxCross2 className="w-7 h-7" />
                </button>
              </div>
              <div className="px-6 pt-5 pb-3">
                <span className="font-semibold text-lg">{parent.label}</span>
              </div>
              <nav className="flex-1 overflow-y-auto px-2">
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