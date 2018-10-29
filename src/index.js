import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

class App extends Component {

  constructor(props){
    const API_KEY = 'AIzaSyB5eCjjGcRTt6tAtnClpEnEipRemHJJS1o';
    super(props);
    this.state = {videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'iPhone'}, (videos) =>{
      this.setState({videos:videos, selectedVideo: videos[0]});
    })
  }
  render(){
  return (
    <div>
    <SearchBar />
    <VideoDetail video={this.state.selectedVideo} />
    <VideoList videos = {this.state.videos} selectedVideo = {this.state.selectedVideo} />
    </div>
  );
}
}
ReactDOM.render(<App/>, document.querySelector(".container"));
