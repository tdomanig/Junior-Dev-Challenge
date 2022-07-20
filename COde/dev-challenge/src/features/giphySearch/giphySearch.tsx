import { RandomGif } from "../../components/hooks/use-show-random";
import { Loader } from "@mantine/core";

export const GiphySearch = () => {
  const { data, isLoading, error, isError } = RandomGif();
  if (isLoading) {
    return <Loader></Loader>;
  }
  return data ? (
    <div>
      <video src={data.data.images.original_mp4.mp4} autoPlay loop></video>
    </div>
  ) : (
    <h1>No data</h1>
  );
};
