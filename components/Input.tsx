import type { FC, InputHTMLAttributes } from "react";

interface CustomInputAttributes {
  error?: boolean;
  type?: "text" | "password" | "search";
}

type Props = InputHTMLAttributes<HTMLInputElement> & CustomInputAttributes;

const Input: FC<Props> = ({ error, ...attributes }) => {
  return (
    <div
      className={`w-full border rounded-lg px-4 py-1 transition-all focus-within:ring-2 ${
        error
          ? "border-red focus-within:ring-red"
          : "border-grey-200 focus-within:ring-grey-500"
      }`}
    >
      <input
        {...attributes}
        className="w-full bg-transparent text-grey-500 placeholder-grey-400 outline-none"
      />
    </div>
  );
};

export default Input;
