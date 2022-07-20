import { useSearchGif } from "../../components/hooks/use-search-gif";
import { Loader } from "@mantine/core";

export const GiphyResult = () => {
  const { data, isLoading, isError, error } = useSearchGif();

  if (isLoading) {
    return <Loader />;
  }
  console.log(data);
  return data ? (
    <div>
      {data.map((result: any) => {
        console.log(result.images.original.mp4);
        return <img className="m-3" src={result.images.original.url}></img>;
      })}
    </div>
  ) : (
    <h1>noData</h1>
  );
};
