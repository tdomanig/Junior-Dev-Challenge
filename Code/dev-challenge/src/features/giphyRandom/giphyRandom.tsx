import { useRandomGif } from "../../components/hooks/use-show-random";
import { Loader } from "@mantine/core";

export const GiphyRandom = () => {
  const { data, isLoading } = useRandomGif();
  if (isLoading) {
    return <Loader />;
  }

  return data ? (
    <div className="flex flex-col items-center">
      <img
        className="h-[300px] w-[300px] mx-auto"
        src={data.data.images.original.url}
        alt={data.data.title}
      ></img>
    </div>
  ) : (
    <h1>No data</h1>
  );
};
