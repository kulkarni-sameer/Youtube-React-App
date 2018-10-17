import React from 'react';
import ReactDOM from 'react-dom'

const VideoListItem = (props) => {
  const vid = props.video;
  const imgurl = vid.snippet.thumbnails.default.url;
  return (
    <li>
    <img src= {imgurl} />
    </li>
  );
}

export default VideoListItem;
