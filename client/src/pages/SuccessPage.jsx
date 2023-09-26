import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function successPage() {
  const [counter, setCounter] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const timer =
      counter > 0 &&
      setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
    if (counter == 0) {
      navigate("/");
    }
    return () => clearTimeout(timer);
  }, [counter]);

  return (
    <div className="flex flex-col items-center justify-center pt-60 pb-40 gap-16">
      <h1 className="text-8xl text-[#411900] font-[Parisienne]">
        Order Placed <span className="text-[#c32828]">Successfully</span>
      </h1>
      <h2 className="text-6xl text-[#411900] font-[Parisienne]">
        Thanks For <span className="text-[#c32828]">Shopping With Us</span>
      </h2>
      <h3 className="text-3xl text-[#411900] font-[Pacifico]">
        Redirecting to
        <span className="text-[#c32828]"> HomePage in {counter}</span>
      </h3>
    </div>
  );
}
