import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cartSlice.js";

export default function CartItem() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="grow">
      {cart.map((item) => (
        <div key={item.id} className="py-5 px-4 flex gap-[10px]">
          <div className="w-16 h-16 shrink-0">
            <img src={item.photoUrl} alt={item.name} className="w-full h-full" />
          </div>
          <div className="overflow-hidden relative w-full h-full">
            <span className="text-ellipsis whitespace-nowrap overflow-hidden text-base leading-4 mb-[10px] font-semibold block pr-6">
              {item.name}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 absolute top-0 right-0 cursor-pointer"
              onClick={() => {
                dispatch(removeItem(item.id));
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
            <div className="w-fit flex border border-opacity-20 h-8 mb-2">
              <span
                className="text-lg w-8 flex items-center justify-center cursor-pointer text-gray-700 border-r border-opacity-20"
                onClick={() => {
                  dispatch(decrementQuantity(item.id));
                }}
              >
                -
              </span>
              <span className="text-sm w-10 flex items-center justify-center cursor-pointer text-gray-700">
                {item.quantity}
              </span>
              <span
                className="text-lg w-8 flex items-center justify-center cursor-pointer text-gray-700 border-l border-opacity-20"
                onClick={() => {
                  dispatch(incrementQuantity(item.id));
                }}
              >
                +
              </span>
            </div>
            <div className="flex items-center gap-[5px] text-xs font-semibold ">
              <span>{item.quantity}</span>
              <span>x</span>
              <span className="text-[#c32828]">&#8377;{item.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
