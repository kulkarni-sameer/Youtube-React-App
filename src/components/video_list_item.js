import React from 'react';

const VideoListItem = (props) => {
  return (
    <div>
    {props.video.snippet.description}
    </div>
  );
}

export default VideoListItem;
