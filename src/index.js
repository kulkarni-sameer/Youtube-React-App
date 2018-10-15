import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyB5eCjjGcRTt6tAtnClpEnEipRemHJJS1o';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {videos: []};
    YTSearch({key: API_KEY, term: 'iPhone'}, (videos) =>{
      this.setState({videos})
      console.log(videos);
    });
  }
   render(){
    return (
      <div>
      <SearchBar />
      </div>

    );
}}

ReactDOM.render(<App/>, document.querySelector(".container"))
