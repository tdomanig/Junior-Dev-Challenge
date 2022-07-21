import { useRandomGif } from "../../components/hooks/use-show-random";
import { Loader } from "@mantine/core";
import headerLogo from "../../components/logos/header-logo.gif";

export const GiphyRandom = () => {
  const { data, isLoading, error, isError } = useRandomGif();
  if (isLoading) {
    return <Loader />;
  }
  return data ? (
    <div className="flex flex-col items-center">
      <div className="bg-black h-[100px] flex justify-center w-screen mb-3 text-center">
        <img
          className="my-auto w-[500px]"
          src={headerLogo}
          alt="Header-Logo"
        ></img>
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
