import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
  render(){
    return (
      <div>
      <input onChange={this.onChangeEvent}/>
      </div>
    );
  }
  onChangeEvent(event){
    console.log(event.target.value);
  }
}

export default SearchBar;
