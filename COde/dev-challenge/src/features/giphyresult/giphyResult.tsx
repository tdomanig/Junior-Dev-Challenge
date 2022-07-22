import { useSearchGif } from "../../components/hooks/use-search-gif";
import { Loader } from "@mantine/core";

import { Input } from "../giphySearch/giphySearch";

export const GiphyResult = ({ searchterm, Gifquanity }: Input) => {
  const { data, isLoading } = useSearchGif(searchterm, Gifquanity);
  let ids: any = [];

  try {
    ids = JSON?.parse(localStorage.ids);
  } catch (err: any) {
    localStorage.clear();
  }

  if (isLoading) {
    return <Loader />;
  }

  return data ? (
    <div className="grid grid-cols-3 w-screen lg:grid-cols-2 sm:grid-cols-1">
      {Object.values(data).map((result: any, key: number) => {
        for (const item in ids) {
          if (result.id === ids[item]) {
            return (
              <div key={key} className=" flex flex-col  items-center">
                <img
                  className="m-3 mb-0 h-[300px] w-[300px]  "
                  src={result.images.original.url}
                  key={key}
                  alt={result.title}
                ></img>
                <div className="bg-gray-700 h-[75px] w-[300px] flex text-white">
                  You already have this in your favorite list
                </div>
              </div>
            );
          }
        }
        return (
          <div key={key} className=" flex flex-col  items-center">
            <img
              className="m-3 mb-0 h-[300px] w-[300px]  "
              src={result.images.original.url}
              key={key}
              alt={result.title}
            ></img>
            <div className="bg-gray-700 h-[75px] w-[300px] flex">
              <label
                id={result.id + "label"}
                className="text-white my-auto mx-4"
                htmlFor="likeButton"
              >
                Add to favourites
              </label>
              <button
                name="likeButton"
                id={result.id}
                className="bg-transparent my-auto mx-4"
                onClick={() => {
                  ids.push(result.id);

                  localStorage.setItem("ids", JSON.stringify(ids));

                  const button = document.getElementById(result.id);
                  const label = document.getElementById(result.id + "label");
                  if (button !== null && label !== null) {
                    button.style.display = "none";
                    label.innerText = "Added to favorites";
                    label.style.color = "green";
                  }
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                  <g fill="#BF1D11">
                    <path d="m24 41.95-2.05-1.85q-5.3-4.85-8.75-8.375-3.45-3.525-5.5-6.3T4.825 20.4Q4 18.15 4 15.85q0-4.5 3.025-7.525Q10.05 5.3 14.5 5.3q2.85 0 5.275 1.35Q22.2 8 24 10.55q2.1-2.7 4.45-3.975T33.5 5.3q4.45 0 7.475 3.025Q44 11.35 44 15.85q0 2.3-.825 4.55T40.3 25.425q-2.05 2.775-5.5 6.3T26.05 40.1ZM24 38q5.05-4.65 8.325-7.975 3.275-3.325 5.2-5.825 1.925-2.5 2.7-4.45.775-1.95.775-3.9 0-3.3-2.1-5.425T33.5 8.3q-2.55 0-4.75 1.575T25.2 14.3h-2.45q-1.3-2.8-3.5-4.4-2.2-1.6-4.75-1.6-3.3 0-5.4 2.125Q7 12.55 7 15.85q0 1.95.775 3.925.775 1.975 2.7 4.5Q12.4 26.8 15.7 30.1 19 33.4 24 38Zm0-14.85Z" />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <h1>noData</h1>
  );
};
