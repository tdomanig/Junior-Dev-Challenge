import { Link } from "react-router-dom";
import headerLogo from "./logos/header-logo.gif";

export const Header = () => {
  return (
    <div className="bg-black h-[100px] flex justify-center w-screen mb-3 items-center text-center lg:flex-col ">
      <img
        className="my-auto w-[500px] sm:w-[250px]"
        src={headerLogo}
        alt="Header-Logo"
      ></img>
      <Link className="my-auto" to="/favorites">
        <button className=" text-black w-[150px] h-[40px] rounded-full sm:ml-0 lg:ml-0 ml-[50px] bg-emerald-400 hover:bg-emerald-600 hover:translate-y-2.5">
          Favorites
        </button>
      </Link>
    </div>
  );
};
