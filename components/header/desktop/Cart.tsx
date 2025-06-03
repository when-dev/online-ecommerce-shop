import { FC } from "react";
import { PiShoppingCartLight } from "react-icons/pi";

const Cart: FC<{ items?: number; className?: string }> = ({ items, className }) => {
  const showBadge = typeof items === "number" && items > 0;

  return (
    <div className={`relative flex items-center justify-center ${className || ""}`}>
      {showBadge && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange rounded-full text-white text-[10px] flex items-center justify-center z-10">
          {Math.min(items, 99)}
        </div>
      )}
      <PiShoppingCartLight className="w-full h-full" />
    </div>
  );
};

export default Cart;
