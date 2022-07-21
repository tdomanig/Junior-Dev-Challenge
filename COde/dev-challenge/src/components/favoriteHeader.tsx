import { Link } from "react-router-dom";
import headerLogo from "./logos/header-logo.gif";

export const FavoriteHeader = () => {
  return (
    <div className="bg-black h-[100px] flex justify-center w-screen mb-3 text-center">
      <img
        className="my-auto w-[500px]"
        src={headerLogo}
        alt="Header-Logo"
      ></img>
      <Link className="my-auto" to="/">
        <button className=" text-black w-[150px] h-[40px] rounded-full  ml-[50px] bg-emerald-400 hover:bg-emerald-600 hover:translate-y-2.5">
          Go to Main
        </button>
      </Link>
    </div>
  );
};
