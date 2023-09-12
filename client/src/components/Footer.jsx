import { AiOutlineInstagram } from "react-icons/ai";
import {
  BiLogoSnapchat,
  BiLogoLinkedinSquare,
  BiLogoSlack,
} from "react-icons/bi";
import { useParams } from "react-router-dom";

export default function Footer() {
  const { id } = useParams();

  if (id) {
    return (
      <div className="flex flex-col items-center justify-between fixed bottom-0 left-0 w-full py-5 mt-4 bg-[#232346] text-white shadow-md rounded-t-2xl lg:flex-row lg:px-20">
        <div>
          <h1 className="font-bold font-[Pacifico] text-4xl text-[#a34e5b] pb-3">
            <span className="text-[#79798e]">Golden</span>&nbsp;Bakery
          </h1>
        </div>
        <div>
          <p className="font-semibold text-[#79798e] pb-3 2xl:pr-24">
            &#169;&nbsp;2023&nbsp;Golden&nbsp;Bakery.&nbsp;All&nbsp;rights&nbsp;reserved.
          </p>
        </div>
        <div className="flex text-[#79798e] gap-5">
          <AiOutlineInstagram className="h-10 w-10 cursor-pointer" />
          <BiLogoSnapchat className="h-10 w-10 cursor-pointer" />
          <BiLogoLinkedinSquare className="h-10 w-10 cursor-pointer" />
          <BiLogoSlack className="h-9 w-9 cursor-pointer" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-between py-5 mt-4 bg-[#232346] text-white shadow-md rounded-t-2xl lg:flex-row lg:px-20">
        <div>
          <h1 className="font-bold font-[Pacifico] text-4xl text-[#a34e5b] pb-3">
            <span className="text-[#79798e]">Golden</span>&nbsp;Bakery
          </h1>
        </div>
        <div>
          <p className="font-semibold text-[#79798e] pb-3 2xl:pr-24">
            &#169;&nbsp;2023&nbsp;Golden&nbsp;Bakery.&nbsp;All&nbsp;rights&nbsp;reserved.
          </p>
        </div>
        <div className="flex text-[#79798e] gap-5">
          <AiOutlineInstagram className="h-10 w-10 cursor-pointer" />
          <BiLogoSnapchat className="h-10 w-10 cursor-pointer" />
          <BiLogoLinkedinSquare className="h-10 w-10 cursor-pointer" />
          <BiLogoSlack className="h-9 w-9 cursor-pointer" />
        </div>
      </div>
    );
  }
}
