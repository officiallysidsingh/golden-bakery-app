// Custom Components
import Banner from "../components/Banner.jsx";
import ProductCard from "../components/ProductCard.jsx";

// Constants
import { NewProducts, AllProducts } from "../constants/Products.js";

export default function Home() {
  return (
    <div>
      <Banner />
      <h1 className="font-[Parisienne] mx-auto max-w-2xl text-center font-bold text-6xl mt-8 text-[#411900]">
        ~~~~ <span className="text-[#c32828]">New</span>&nbsp;Products ~~~~
      </h1>
      <div className="grid justify-center grid-col-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-20 mx-auto max-w-[85%] mt-4">
        {NewProducts.map((value) => (
          <ProductCard data={value} key={value.id} />
        ))}
      </div>
      <h1 className="font-[Parisienne] mx-auto max-w-2xl text-center font-bold text-6xl mt-8 text-[#411900]">
        ~~~~ <span className="text-[#c32828]">All</span>&nbsp;Products ~~~~
      </h1>
      <div className="grid justify-center grid-col-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-20 mx-auto max-w-[85%] mt-4">
        {AllProducts.map((value) => (
          <ProductCard data={value} key={value.id} />
        ))}
      </div>
    </div>
  );
}
