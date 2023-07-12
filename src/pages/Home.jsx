// Custom Components
import Banner from "../components/Banner.jsx";
import ProductCard from "../components/ProductCard.jsx";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-20 mx-auto max-w-[85%] mt-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
