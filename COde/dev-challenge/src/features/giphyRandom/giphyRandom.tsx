import { useRandomGif } from "../../components/hooks/use-show-random";
import { Loader } from "@mantine/core";

export const GiphyRandom = () => {
  const { data, isLoading, error, isError } = useRandomGif();
  if (isLoading) {
    return <Loader />;
  }
  return data ? (
    <div className="flex flex-col items-center">
      <div className="bg-black h-[100px] w-screen mb-3 text-center">
        <h1 className="text-white mt-5 text-lg">Giphy Search APP</h1>
      </div>
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
