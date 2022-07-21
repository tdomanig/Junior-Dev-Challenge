import { useQuery } from "react-query";

import axios from "axios";

export const useFavourite = () => {
  const ids = JSON.parse(localStorage.ids);

  let idsString: string = "";
  for (const key in ids) {
    idsString += ids[key] + ",";
  }

  const baseURl = `https://api.giphy.com/v1/gifs?api_key=vf7nDm11F3X2Pe63jIGjWWPiFCFCZXM8&ids=${idsString}`;
  return useQuery({
    queryKey: [JSON.parse(localStorage.ids)],
    queryFn: async () => {
      const response = await axios.get(baseURl);
      return response.data;
    },
  });
};
