import { Video } from "./pushItemsToArray";

export const sortAlphabetically = (a: Video, b: Video) => {
  if (a.name && b.name) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
  } else {
    return 0;
  }
};