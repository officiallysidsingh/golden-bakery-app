import bannerImg from "../assets/banner.jpg";

export default function Banner() {
  return (
    <div
      style={{ backgroundImage: `url(${bannerImg})` }}
      className="flex items-center justify-center
      bg-cover bg-center bg-no-repeat h-96
      mx-auto max-w-[90%] rounded-2xl
      mt-4 shadow-xl
      absolute inset-0 bg-black opacity-50"
    >
      <h1 className="font-bold text-[#E48436] text-6xl">Golden Bakery</h1>
    </div>
  );
}
