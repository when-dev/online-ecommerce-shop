import { FC } from "react";
import { FiShoppingCart } from "react-icons/fi";


const Cart: FC<{ items?: number; className?: string }> = ({ items, className }) => {
  const showBadge = typeof items === "number" && items > 0;

  return (
    <div className={`relative flex items-center justify-center ${className || ""}`}>
      {showBadge && (
        <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-100 rounded-full text-white text-[10px] flex items-center justify-center z-10">
          {Math.min(items, 99)}
        </div>
      )}
      <FiShoppingCart className="w-full h-full" />
    </div>
  );
};

export default Cart;
