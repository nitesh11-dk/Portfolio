import { useScroll } from "@react-three/drei";
import { config } from "../../config";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";

const Home = () => {
  const scrollData = useScroll();
  const [offset, setOffset] = useState(0);

  useFrame(() => {
    setOffset(scrollData.offset);
  });

  return (
    <div
      className={`h-screen text-white py-24 px-4 sm:flex sm:flex-col sm:px-10 sm:justify-center relative sm:-top-20 transition-opacity duration-500 ease-in-out ${
        offset >= 0.04 ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1 className="poppins block text-[44px] leading-none text-zinc-800 font-medium sm:text-white sm:text-7xl">
        Hi, my
        <span className="block">
          name is
          <span className="text-blue-600 sm:text-blue-100"> {config.name}</span>
        </span>
      </h1>
      <p className="mt-3 text-lg text-gray-800 w-[90%] sm:text-white sm:text-md">
        I'm a Full Stack Developer passionate about web development.
      </p>
      <a
        href="#contact"
        className="mt-3 inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-3xl transition duration-300 ease-in-out transform hover:scale-105 w-fit"
      >
        Get in Touch
      </a>
    </div>
  );
};

export default Home;
