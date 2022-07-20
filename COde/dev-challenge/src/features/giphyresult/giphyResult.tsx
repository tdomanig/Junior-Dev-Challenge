import { useSearchGif } from "../../components/hooks/use-search-gif";
import { Loader } from "@mantine/core";

export const GiphyResult = () => {
  const { data, isLoading, isError, error } = useSearchGif();

  if (isLoading) {
    return <Loader />;
  }
  console.log(data);
  return data ? (
    <div className="grid grid-cols-3 w-screen">
      {data.map((result: any) => {
        console.log(result.images.original.mp4);
        return (
          <div className=" flex  items-center">
            <img
              className="m-3 h-[300px] w-[300px] "
              src={result.images.original.url}
              alt={result.title}
            ></img>
          </div>
        );
      })}
    </div>
  ) : (
    <h1>noData</h1>
  );
};
