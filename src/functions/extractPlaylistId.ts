export function extractPlaylistId(playlistIdOrUrl: string) {
  let playlistId;

  if (playlistIdOrUrl.includes("list=")) {
    playlistId = playlistIdOrUrl.split("list=")[1];
  };

  if (playlistId && playlistId.includes("&")) {
    playlistId = playlistId.split("list=")[0];
  };

  return playlistId ? playlistId : playlistIdOrUrl;
};