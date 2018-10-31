import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippt.thumbnails.default.url;
  return (
    <div>
    <img src={imageUrl}>
    <p>{video.snippt.title}</p>
    </div>
  );
}

export default VideoListItem;
