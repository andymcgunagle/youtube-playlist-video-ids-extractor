export const pushItemsToArray = (items, allPagesData) => {
  if (items) {
    for (let item of items) {
      const video = {
        name: item.snippet.title,
        id: item.contentDetails.videoId,
        link: `https://www.youtube.com/watch?v=${item.contentDetails.videoId}`,
      };
      allPagesData.push(video);
    };
  };
};