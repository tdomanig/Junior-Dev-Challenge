import { useFavourite } from "../../components/hooks/use-favourite-gifs";
import { Loader } from "@mantine/core";

export const FavouriteList = () => {
  const { data, isLoading, isError } = useFavourite();

  if (isError) {
    return <h1>Es ist etwas Schief gegenagen</h1>;
  }
  console.log(data);
  if (isLoading) {
    return <Loader />;
  }
  if (data === undefined) {
    return <h1>No Data</h1>;
  }
  const ids = JSON.parse(localStorage.ids);
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
            <div className="bg-black w-[300px] flex justify-center h-[75px]">
              <button
                className="bg-white h-8 my-auto"
                onClick={() => {
                  for (const key in ids) {
                    if (result.id === ids[key] || ids[key] === null) {
                      ids.splice(key, 1);
                    }
                    console.log(ids);
                    localStorage.removeItem("ids");
                  }
                  localStorage.setItem("ids", JSON.stringify(ids));
                  window.location.reload();
                }}
              >
                Delete
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
