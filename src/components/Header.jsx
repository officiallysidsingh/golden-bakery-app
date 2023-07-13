import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// Custom Components
import Cart from "./Cart.jsx";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    function calculateTotalItems () {
      let items = 0;
  
      cartItems.forEach(item => {
        items += 1;
      });
      setTotalItems(items);
    }

    calculateTotalItems();
  }, [cartItems]);

  return (
    <>
      <header className="h-24 mx-auto flex items-center justify-between">
        <div className="font-[Pacifico] pl-20">
          <h1 className="text-[#411900] text-4xl">
            Golden&nbsp;<span className="text-[#c32828]">Bakery</span>
          </h1>
        </div>
        <div className="mr-20">
          <div className="flex items-center justify-between bg-[#c32828] rounded-xl h-12 w-28 gap-2 px-2 py-1 text-white">
            <div className="cursor-pointer">
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
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <div className="cursor-pointer" onClick={() => setShowCart(true)}>
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
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
          </div>
          {(totalItems > 0) ? (
            <div className="flex items-center justify-center bg-black text-white absolute h-5 w-5 rounded-full -mt-5 ml-[5.5rem]" onClick={() => setShowCart(true)}>
              <p className="cursor-pointer">{totalItems}</p>
            </div>
          ) : null}
        </div>
      </header>
      <Cart showCart={showCart} setShowCart={setShowCart} />
    </>
  );
}
