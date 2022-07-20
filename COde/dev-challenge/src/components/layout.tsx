import { FC, ReactNode } from "react";
import { GiphyRandom } from "../features/giphyRandom/giphyRandom";
import { GiphyResult } from "../features/giphyresult/giphyResult";
type LayoutProps = {
  children: ReactNode;
};
export const Layout: FC<LayoutProps> = () => {
  return (
    <div>
      <GiphyRandom></GiphyRandom>
    </div>
  );
};
