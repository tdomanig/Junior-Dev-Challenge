import { useSearchGif } from "../../components/hooks/use-search-gif";
import { Loader } from "@mantine/core";
import { LikeICon } from "../../components/likeicon";
import { Input } from "../giphySearch/giphySearch";
export const GiphyResult = ({ searchterm, Gifquanity }: Input) => {
  const { data, isLoading } = useSearchGif(searchterm, Gifquanity);
  const ids = JSON.parse(localStorage.ids);
  let iconColor: string = "";
  if (isLoading) {
    return <Loader />;
  }
  if (data?.length === 0) {
    return <h1>No Data</h1>;
  }

  return data ? (
    <div className="grid grid-cols-3 w-screen lg:grid-cols-2 sm:grid-cols-1">
      {Object.values(data.data).map((result: any, key: any) => {
        for (const item in ids) {
          if (result.id === ids[item]) {
            return (
              <div key={key} className=" flex flex-col  items-center">
                <img
                  className="m-3 mb-0 h-[300px] w-[300px]  "
                  src={result.images.original.url}
                  key={key}
                  alt={data.data.title}
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
              alt={data.data.title}
            ></img>
            <div className="bg-gray-700 h-[75px] w-[300px] flex">
              <label className="text-white my-auto mx-4" htmlFor="likeButton">
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
                  if (button !== null) {
                    iconColor = "#0E991E";
                  }
                }}
              >
                <LikeICon style="#0E991E" />
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
