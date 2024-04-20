import { Link } from "react-router-dom";

import sun from "../../assets/sun.svg";
import mountain from "../../assets/mountain-right.png";

export default function Hero() {
  return (
    <section className="w-full h-full relative flex items-center sm:bg-hero-pattern bg-contain bg-gradient-to-b from-current to-transparent bg-no-repeat bg-bottom">
      <div className="flex flex-col gap-6 z-50">
        <h1 className="font-black uppercase text-3xl sm:text-5xl md:text-7xl">
          Explore <br />
          the Mountains
        </h1>
        <p className="text-black/60 text-xl sm:text-2xl md:text-3xl tracking-wider">
          It's time to live your dreams
        </p>

        <Link to="/about" className="text-black font-bold text-xl absolute top-3/4 left-0">
          Get Started
        </Link>
      </div>

      <img src={sun} alt="Sun with birds" className="absolute left-10 sm:left-1/2 z-10" />

      <img src={mountain} alt="Sun with birds" className="absolute right-0 bottom-0 max-w-[50%]" />
    </section>
  );
}
