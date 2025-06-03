import type { FC, InputHTMLAttributes } from "react";
import { FaSearch } from "react-icons/fa";

interface CustomInputAttributes {
  error?: boolean;
  type?: "text" | "password" | "search";
}

type Props = InputHTMLAttributes<HTMLInputElement> & CustomInputAttributes;

const Input: FC<Props> = ({ error, ...attributes }) => {
  return (
    <div
      className={`w-full border-b py-1 transition-all  ${
        error
          ? "border-red focus-within:ring-red"
          : "border-grey-200 focus-within:ring-grey-500"
      } focus-within:border-b-orange hover:border-b-orange`}
    >
      <div className="relative">
        <input
          {...attributes}
          className="w-full bg-transparent text-grey-500 placeholder-grey-300 placeholder:text-sm outline-none"
        />
        <button className="absolute right-[-5px] top-0 flex items-center justify-center px-2 text-sm text-grey-300 transition-all w-8 h-8">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Input;
