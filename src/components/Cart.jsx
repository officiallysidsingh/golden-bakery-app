export default function Cart ({ showCart, setShowCart }) {
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
            </div>
        </div>
    );
}