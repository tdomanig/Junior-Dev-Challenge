import { useSearchGif } from "../../components/hooks/use-search-gif";
import { Loader } from "@mantine/core";
import { LikeICon } from "../../components/likeicon";

export const GiphyResult = (inputValues: any) => {
  const { data, isLoading } = useSearchGif(
    inputValues.test.searchterm,
    inputValues.test.Gifquanity
  );

  if (isLoading) {
    return <Loader />;
  }
  if (data?.length === 0) {
    return <h1>No Data</h1>;
  }

  return data ? (
    <div className="grid grid-cols-3 w-screen lg:grid-cols-2 sm:grid-cols-1">
      {Object.values(data.data).map((result: any, key: any) => {
        return (
          <div key={key} className=" flex flex-col  items-center">
            <img
              className="m-3 mb-0 h-[300px] w-[300px]  "
              src={result.images.original.url}
              key={key}
              alt={data.data.title}
            ></img>
            <div className="bg-gray-700 h-[75px] w-[300px] flex">
              <label className="text-white my-auto mx-4" htmlFor="like">
                Add to favourites
              </label>
              <button
                name="like"
                className="bg-transparent my-auto mx-4"
                onClick={() => {
                  localStorage.setItem("id", result.id);
                }}
              >
                <LikeICon />
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
