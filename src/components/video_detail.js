import React from 'react';
import VideoListItem from './video_list_item'

const VideoDetail = (props) => {
  const vid = props.videos.map(function(video){
    return <VideoListItem video = {video} />
})
 return (
   <div>
   {vid}

   </div>
 );
}

export default VideoDetail;
