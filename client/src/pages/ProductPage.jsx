import { useParams } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeItem } from "../redux/cartSlice.js";

// GraphQL
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_BY_ID } from "../graphql.js";

export default function ProductPage() {
  const { id } = useParams();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  const SingleProduct = data.getProductById;

  function toggleAddRemoveButton(id) {
    return cart.find((item) => item.id === id);
  }

  return (
    <div className="flex flex-col justify-start mx-40 mt-4 mb-60 xl:h-[30rem] xl:flex-row">
      <div className="w-full overflow-clip rounded-2xl">
        <img
          src={SingleProduct.photoUrl}
          alt={SingleProduct.name}
          className="rounded-2xl"
        />
      </div>
      <div className="w-full xl:pl-20">
        <h1 className="mt-5 font-bold text-5xl">{SingleProduct.name}</h1>
        <p className="mt-5 font-medium text-lg text-justify pb-5">
          {SingleProduct.description}
        </p>
        {toggleAddRemoveButton(SingleProduct.id) ? (
          <div
            className="w-60 flex h-12 mr-3 rounded-2xl mt-4 flex-grow-1 md:flex-grow-0 text-xl cursor-pointer justify-center items-center border-2 border-[#c32828] bg-gray-100 text-black"
            onClick={() => {
              dispatch(removeItem(SingleProduct.id));
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
            <h1 className="px-2">Remove&nbsp;From&nbsp;Cart</h1>
          </div>
        ) : (
          <div
            className="w-44 flex h-12 mr-3 rounded-2xl mt-4 flex-grow-1 md:flex-grow-0 text-xl cursor-pointer justify-center items-center text-white bg-[#c32828]"
            onClick={() => {
              dispatch(
                addToCart({
                  id: SingleProduct.id,
                  photoUrl: SingleProduct.photoUrl,
                  name: SingleProduct.name,
                  price: SingleProduct.price,
                })
              );
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <h1 className="px-2">Add&nbsp;To&nbsp;Cart</h1>
          </div>
        )}
      </div>
    </div>
  );
}
