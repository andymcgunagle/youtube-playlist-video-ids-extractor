# get-video-data-from-youtube-playlist

[![npm version](https://badge.fury.io/js/get-video-data-from-youtube-playlist.svg)](https://badge.fury.io/js/get-video-data-from-youtube-playlist)
[![npm](https://img.shields.io/npm/dm/get-video-data-from-youtube-playlist.svg)](https://www.npmjs.com/package/get-video-data-from-youtube-playlist)

> Writes video data from all the videos on a YouTube playlist to a JSON file.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Author](#author)

## Installation

To install the package, run:

```sh
npm install get-video-data-from-youtube-playlist
```

Or, if you prefer using Yarn:

```sh
yarn add get-video-data-from-youtube-playlist
```

## Usage

### getAllPlaylistItems

```js
import getAllPlaylistItems from 'get-video-data-from-youtube-playlist';

getAllPlaylistItems({
  playlistIdOrUrl: 'https://www.youtube.com/playlist?list=playlist-id-here',
  youTubeApiKey: 'youTubeApiKey-here',
});
```

### getAllPlaylistItems Results

```json
[
  {
    "name": "title",
    "id": "videoId",
    "link": "https://www.youtube.com/watch?v=videoId",
  }
]
```

## Author

- **Andy McGunagle** - [andymcgunagle](https://github.com/andymcgunagle)
