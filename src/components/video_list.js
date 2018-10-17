import React from 'react';
import ReactDOM from 'react-dom';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
  const ret = props.videos.map((video) => {
    return <VideoListItem key= {video.etag} video = {video} />
  })
  return (
    <ul>
    {ret}
    </ul>
  );
}

export default VideoList;
