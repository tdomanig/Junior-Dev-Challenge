import { useQuery } from "react-query";

import axios from "axios";

export const useSearchGif = (test?: string, qty?: string) => {
  const baseURl = `https://api.giphy.com/v1/gifs/search?api_key=${
    process.env.REACT_APP_OMDB_API_KEY
  }&q=${test === undefined ? (test = "Hello") : test}&limit=${
    qty === undefined ? (qty = "3") : qty
  }`;
  return useQuery({
    queryKey: [test, qty],
    queryFn: async () => {
      const response = await axios.get(baseURl);

      return response.data;
    },
  });
};
