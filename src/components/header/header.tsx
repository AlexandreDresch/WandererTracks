import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full p-7 flex items-center justify-between">
      <Link to="/" className="flex">
        <img src="/logo.svg" alt="Wanderer Tracks" className="" />
        <div className="uppercase flex flex-col justify-center">
          <h1 className="uppercase text-2xl">
            Wanderer <strong>Tracks</strong>
          </h1>
          <span className="text-center text-sm text-slate-500">
            Explore Nature
          </span>
        </div>
      </Link>

      <nav>
        <ul className="flex justify-center gap-4 uppercase text-lg">
          <li className="hover:text-slate-700">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-slate-700">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-slate-700">
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:text-slate-700">
            <Link to="/pricing">Pricing</Link>
          </li>
          <li className="bg-black rounded-xl px-1.5">
            <Link to="/sign-in" className="text-white">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
