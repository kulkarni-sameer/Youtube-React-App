import React from 'react';

const VideoListItem = ({video}) => {
  return (
    <div>
    {video.snippet.description}
    </div>
  );
}

export default VideoListItem;
