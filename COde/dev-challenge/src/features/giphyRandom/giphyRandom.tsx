import { useRandomGif } from "../../components/hooks/use-show-random";
import { Loader } from "@mantine/core";

export const GiphyRandom = () => {
  const { data, isLoading, error, isError } = useRandomGif();
  if (isLoading) {
    return <Loader></Loader>;
  }
  return data ? (
    <div>
      <img src={data.data.images.original.url}></img>
    </div>
  ) : (
    <h1>No data</h1>
  );
};
