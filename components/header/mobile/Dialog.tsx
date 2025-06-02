import { FC, MouseEvent, ReactNode, TouchEvent } from "react";

const Dialog: FC<{
  opened: boolean;
  onClose: () => void;
  children: ReactNode;
}> = ({ children, opened, onClose }) => {
  const closeDialog = (e: MouseEvent | TouchEvent) => onClose();
  const stopPropagation = (e: MouseEvent | TouchEvent) => e.stopPropagation();

  return (
    <div
      className={`
				fixed inset-0 z-[100] flex
				${opened ? "pointer-events-auto" : "pointer-events-none"}
			`}
      onClick={closeDialog}
    >
      <div
        className={`
					absolute inset-0 bg-black transition-opacity duration-300
					${opened ? "opacity-50" : "opacity-0"}
				`}
      />
      <div
        onClick={stopPropagation}
        className={`
					h-full bg-white shadow-lg fixed top-0 left-0
					transform transition-transform duration-300 ease-in-out
					${opened ? "translate-x-0" : "-translate-x-full"}
					w-full md:w-[400px]
				`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dialog;