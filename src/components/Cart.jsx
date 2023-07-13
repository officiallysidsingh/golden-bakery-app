import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Custom Components
import CartItem from "./CartItem.jsx"

export default function Cart ({ showCart, setShowCart }) {
    const [cartSubtotal, setCartSubtotal] = useState(0);

    const cart = useSelector((state) => state.cart);

    useEffect(() => {
      function calculateSubtotal () {
        let total = 0;

        cart.forEach(item => {
            total += item.quantity * item.price
        });
        setCartSubtotal(total);
      }
      
      calculateSubtotal();
    }, [cart]);

    function checkoutCart () {
      console.log(cart);
      console.log(`Total Price: ${cartSubtotal}`);
    }

    if (!showCart){
        return null;
    }
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-end z-[99]">
            <div className="bg-black bg-opacity-50 absolute top-0 left-0 w-full h-full" onClick={() => setShowCart(false)}></div>
            <div className="w-full h-full bg-white relative z-[1] flex flex-col md:w-80">
                <div className="flex items-center justify-end py-5 px-4 border-b-[1px] border-black border-opacity-10 ">
                    <span className="grow mb-0 text-3xl font-bold font-[Pacifico] text-[#411900]">Shopping&nbsp;<span className="text-[#c32828]">Cart</span></span>
                    <span className="flex items-center gap-1.5 cursor-pointer hover:opacity-50" onClick={() => setShowCart(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="uppercase text-sm">Close</span>
                    </span>
                </div>
                {!cart.length ? (
                <div className="flex flex-col items-center gap-5 mt-[100px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32 opacity-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
                <span>No products in the cart.</span>
            <button className="outline-0 border-0 h-10 w-36 flex items-center justify-center cursor-pointer text-sm text-white bg-[#c32828] border-b-4 border-b-[#b40808]" onClick={() => setShowCart(false)}>RETURN TO SHOP</button>
          </div>
        ) : (
          <>
            <CartItem />
            <div className="border-t border-black border-opacity-10">
              <div className="py-5 px-4 border-b border-black border-opacity-10 flex justify-between">
                <span className="mb-0 text-xl font-bold uppercase">Subtotal: </span>
                <span className="mb-0 text-xl font-bold uppercase text-[#c32828]">&#8377;{cartSubtotal}</span>
              </div>
              <div className="py-5 px-4">
                <button className="outline-0 border-0 h-12 w-full flex items-center justify-center cursor-pointer text-base text-white bg-[#c32828] border-b-4 border-b-[#b40808]" onClick={checkoutCart}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
            </div>
        </div>
    );
}