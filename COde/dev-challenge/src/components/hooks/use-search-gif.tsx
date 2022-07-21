import { useQuery } from "react-query";

import axios from "axios";

export const useSearchGif = (test?: string, qty?: string) => {
  const baseURl = `https://api.giphy.com/v1/gifs/search?api_key=vf7nDm11F3X2Pe63jIGjWWPiFCFCZXM8&q=${
    test === undefined ? (test = "Hello") : test
  }&limit=${qty === undefined ? (qty = "3") : qty}`;
  return useQuery({
    queryKey: [test, qty],
    queryFn: async () => {
      const response = await axios.get(baseURl);

      return response.data;
    },
  });
};
