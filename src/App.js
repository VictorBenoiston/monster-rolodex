import { Component } from 'react'
import './App.css';
import CardList from './components/card-list/CardList'
import SearchBox from './components/search-box/SearchBox'
import Card from './components/layout/Card'

class App extends Component {

  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {     // Will run at the moment that the component is 1st rendered. 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      }
      ))
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase()
    this.setState(() => {
      return { searchField }  // searchField : searchField, defined the value with the same name.
    })
  }


  render() {

    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })

    return (
      <div className='App'>
        <h1 className='title'>Monster Rolodex</h1>
        <SearchBox onChangeFn={onSearchChange} className='monsters-search-box' placeHolder='Search Monsters'></SearchBox>
          <CardList list={filteredMonsters} color={'white'} />
      </div>
    );
  }
}

export default App;
