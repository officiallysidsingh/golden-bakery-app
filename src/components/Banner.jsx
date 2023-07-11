import bannerImg from "../assets/banner.jpg";

export default function Banner() {
  return (
    <div
      style={{ backgroundImage: `url(${bannerImg})` }}
      className="bg-cover bg-center bg-no-repeat
                   mx-auto rounded-3xl
      flex items-center justify-center md:h-[40rem] h-96
                   max-w-[90%]
                   mt-4 shadow-2xl"
    ></div>
  );
}
