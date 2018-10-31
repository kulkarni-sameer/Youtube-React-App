import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <div>
    <img src={imageUrl} />
    <p>{video.snippet.title}</p>
    </div>
  );
}

export default VideoListItem;
