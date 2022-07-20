import { FC, ReactNode } from "react";
import { GiphyRandom } from "../features/giphyRandom/giphyRandom";
import { GiphySearch } from "../features/giphySearch/giphySearch";
type LayoutProps = {
  children: ReactNode;
};
export const Layout: FC<LayoutProps> = () => {
  return (
    <div>
      <GiphyRandom></GiphyRandom>
      <GiphySearch></GiphySearch>
    </div>
  );
};
