import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyB5eCjjGcRTt6tAtnClpEnEipRemHJJS1o';

YTSearch({key: API_KEY, term: 'surfboards'}, function(res){
  console.log(res);
})

const App = () =>{
    return (
      <div>
      <SearchBar />
      </div>

    );
}

ReactDOM.render(<App/>, document.querySelector(".container"))
