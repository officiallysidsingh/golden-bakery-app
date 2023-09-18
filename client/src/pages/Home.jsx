// Custom Components
import Banner from "../components/Banner.jsx";
import ProductCard from "../components/ProductCard.jsx";

// For GraphQL Query
import { useQuery, gql } from '@apollo/client';
import { GET_PRODUCTS_BY_NUMBER } from "../graphql.js";

export default function Home() {
  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_NUMBER);

  if (loading) return <p>Loading...</p>;
  
  if (error) return <p>Error : {error.message}</p>;
  
  const NewProducts = data.getProductByNumber.slice(0, 5);

  const AllProducts = data.getProductByNumber;

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