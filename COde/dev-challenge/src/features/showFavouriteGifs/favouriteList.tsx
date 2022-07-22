import { useFavourite } from "../../components/hooks/use-favourite-gifs";
import { Loader } from "@mantine/core";
import { Link } from "react-router-dom";

export const FavouriteList = () => {
  const { data, isLoading } = useFavourite();
  let ids: any = [];
  if (isLoading) {
    return (
      <div className="h-screen w-screen flex flex-col justify-center items-center ">
        <Loader />
      </div>
    );
  }
  if (data === undefined) {
    return (
      <div className="h-screen w-screen flex justify-center items-center ">
        <h1 className="text-white">You have no Favorites yet!!</h1>
        <Link className="my-auto" to="/">
          <button className=" text-black w-[150px] h-[40px] rounded-full  ml-[50px] bg-emerald-400 hover:bg-emerald-600 hover:translate-y-2.5">
            Go to Mainpage
          </button>
        </Link>
      </div>
    );
  }
  try {
    ids = JSON.parse(localStorage.ids);
  } catch (e) {
    console.log(e);
  }

  return data ? (
    <div>
      <div className="grid grid-cols-3 w-screen lg:grid-cols-2 sm:grid-cols-1">
        {Object.values(data).map((result: any, key: any) => {
          return (
            <div key={key} className=" flex flex-col  items-center">
              <img
                className="m-3 mb-0 h-[300px] w-[300px]  "
                src={result.images.original.url}
                key={key}
                alt={result.title}
              ></img>
              <div className="bg-black w-[300px] flex justify-center h-[75px]">
                <button
                  className="bg-white h-8 my-auto"
                  onClick={() => {
                    for (const key in ids) {
                      if (result.id === ids[key] || ids[key] === null) {
                        ids.splice(key, 1);
                      }

                      localStorage.removeItem("ids");
                    }
                    localStorage.setItem("ids", JSON.stringify(ids));
                    window.location.reload();
                  }}
                >
                  <svg
                    className="bg-black my-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    width="48"
                  >
                    <g fill="#BF1D11">
                      <path d="M13.05 42q-1.2 0-2.1-.9-.9-.9-.9-2.1V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z" />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="m-auto flex items-center justify-center w-screen my-5">
        <Link to="/">
          <button className=" text-black w-[150px] h-[40px] rounded-full  ml-[50px] bg-emerald-400 hover:bg-emerald-600 hover:translate-y-2.5">
            Go to Mainpage
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <></>
  );
};
