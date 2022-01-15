import { youtube_v3 } from "googleapis";

export interface Video {
  name: string | null | undefined,
  id: string | null | undefined,
  link: string,
};

export const pushItemsToArray = (items: youtube_v3.Schema$PlaylistItem[] | undefined, allPagesData: Video[]) => {
  if (items) {
    for (let item of items) {
      const video: Video = {
        name: item.snippet?.title,
        id: item.contentDetails?.videoId,
        link: `https://www.youtube.com/watch?v=${item.contentDetails?.videoId}`,
      };
      allPagesData.push(video);
    };
  };
};