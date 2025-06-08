import { FC } from "react";
import ArrowIcon from "public/img/arrow.svg";

type TabProps = {
  label: string;
  isActive?: boolean;
  hasChildren?: boolean;
  onClick?: () => void;
  href?: string;
};

const Tab: FC<TabProps> = ({ label, isActive, hasChildren, onClick, href }) => {
  const content = (
    <div className="flex items-center py-2 px-0 cursor-pointer select-none">
      <span className={`text-base ${isActive ? "font-bold" : "font-normal"}`}>
        {label}
      </span>
      {hasChildren && (
        <span className="ml-auto flex items-center">
          <ArrowIcon className="w-2 h-2 transform rotate-180" />
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block w-full">
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className="block w-full text-left bg-transparent"
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Tab;
