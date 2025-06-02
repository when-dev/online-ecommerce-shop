import { FC } from "react";
import { FaShoppingCart } from 'react-icons/fa';

const Cart: FC<{ items?: number }> = ({ items }) => {
	const showBadge = typeof items === "number" && items > 0;

	return (
		<div className="relative w-8 h-8 flex items-center justify-center">
			{showBadge && (
				<div className="absolute bottom-4 left-5 w-4 h-4 bg-orange rounded-full text-white text-[10px] flex items-center justify-center z-9">
					{Math.min(items, 99)}
				</div>
			)}
			<FaShoppingCart className="w-7 h-7" />
		</div>
	);
};

export default Cart;