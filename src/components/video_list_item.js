import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippt.thumbnails.default.url;
  return (
    <div>
    {video.snippet.description}
    </div>
  );
}

export default VideoListItem;
