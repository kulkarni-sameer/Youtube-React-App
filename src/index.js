import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail'

class App extends Component {
  constructor(props){
    const API_KEY = 'AIzaSyB5eCjjGcRTt6tAtnClpEnEipRemHJJS1o';
    super(props);

    this.state = {videos: []};
    YTSearch({key: API_KEY, term: 'iPhone'}, (videos) =>{
      this.setState({videos});
    })
  }
  render(){
  return (
    <div>
    <SearchBar />
    <VideoDetail videos = {this.state.videos} />
    </div>
  );
}
}
ReactDOM.render(<App />, document.querySelector(".container"));
