import { useSearchGif } from "../../components/hooks/use-search-gif";
import { Loader } from "@mantine/core";

export const GiphyResult = (test: any) => {
  const { data: hallo, isLoading, isError, error } = useSearchGif(test.test);
  console.log(test);
  if (isLoading) {
    return <Loader />;
  }
  if (hallo?.length === 0) {
    return <h1>No Data</h1>;
  }

  return hallo ? (
    <div className="grid grid-cols-3 w-screen">
      {Object.values(hallo.data).map((result: any, key: any) => {
        console.log(result.images.original);
        return (
          <div key={key} className=" flex  items-center">
            <img
              className="m-3 h-[300px] w-[300px]  "
              src={result.images.original.url}
              key={key}
              alt={hallo.data.title}
            ></img>
          </div>
        );
      })}
    </div>
  ) : (
    <h1>noData</h1>
  );
};
