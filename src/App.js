import React, { Component } from 'react';
import Search from './components/Search';
import ShortList from './components/ShortList';
import NamesList from './components/NamesList';
import Credits from './components/Credit';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      favourites: []
    }
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }

  toggleFavourite(id) {
    //check if exists or not
    let favList = [];
    let newId = parseInt(id, 10);
    if (this.state.favourites.indexOf(id) >= 0) {
      this.state.favourites.forEach((itemId) => {
        if(itemId !== newId) {
          favList.push(itemId);
        }
      })
    } else {
      favList = this.state.favourites.concat([newId]);
    }
    this.setState({
      favourites: favList
    })
  }

  render() {
    return(
      <div>
        <Search 
          filterText={ this.state.filterText } 
          filterUpdate={ this.filterUpdate.bind(this) } 
        />
        <main>
          <ShortList 
            favourites={ this.state.favourites } 
            data={ this.props.data } 
            toggleFavourite = { this.toggleFavourite.bind(this) }
          />
          <NamesList 
            data={ this.props.data } 
            favourites={this.state.favourites}
            filterText={ this.state.filterText } 
            toggleFavourite={this.toggleFavourite.bind(this) } 
          />
          <Credits />
        </main>
      </div>
    )
  }
}

export default App;
