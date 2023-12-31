import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItem } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ data }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const { id, photoUrl, name, price, description } = data;

  function toggleAddRemoveButton(id) {
    return cart.find((item) => item.id === id);
  }

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-[#c32828] mb-2 cursor-pointer">
      <div className="flex flex-col justify-end items-end -mr-5">
        <img
          className="w-full h-72"
          src={photoUrl}
          alt={name}
          onClick={() => {
            navigate(`/product/${id}`);
          }}
        />
        {toggleAddRemoveButton(id) ? (
          <div
            className="border-2 border-[#c32828] bg-gray-100 rounded-full h-11 w-11 text-black absolute -mb-5 cursor-pointer"
            onClick={() => {
              dispatch(removeItem(id));
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 pl-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        ) : (
          <div
            className="bg-[#c32828] rounded-full h-10 w-10 text-white absolute -mb-5 cursor-pointer"
            onClick={() => {
              dispatch(addToCart({ id, photoUrl, name, price }));
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        )}
      </div>
      <div
        className="px-6 py-4"
        onClick={() => {
          navigate(`/product/${id}`);
        }}
      >
        <div className="font-bold text-2xl mb-1 text-[#411900]">
          &#8377;{price}
        </div>
        <div className="font-bold text-xl mb-2 text-[#c32828]">{name}</div>
        <p className="text-gray-700 text-base">
          {description.substring(0, 101)}...
        </p>
      </div>
    </div>
  );
}
