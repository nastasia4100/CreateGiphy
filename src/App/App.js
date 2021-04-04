import React from 'react'
import {SearchInput} from "../GetGiphy/SearchInput/SearchInput"
import {GifsContent} from "../GetGiphy/GifsContent/GifsContent"
import {CategoryContent} from "../GetGiphy/CategoryContent/CategoryContent"
import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends React.Component {

constructor(props) {
super(props);

this.state = {searchString: "",
    error: null,
    data: []
}

this.handleInputChange = this.handleInputChange.bind(this);
}

handleInputChange = event => {
this.setState({searchString: event.target.value})}

showShowing = (value) => {
    this.setState({showing: value})
}

fetchGifs = () => {
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=GyZEUJvjpxVhvqz7yWGTj6SvAtGRjE7p&limit=20", {
      method: 'GET',
      cors: '*'
    }).then(res => res.json())
        .then((result) => this.setState({data: result.data}),
            (error) => this.setState({error})
        )
  }

  fetchSearch = () => {
    const inputText = this.state.searchString

      fetch("https://api.giphy.com/v1/gifs/search?api_key=GyZEUJvjpxVhvqz7yWGTj6SvAtGRjE7p&q=" + inputText + "&limit=20", {
          method: 'GET',
          cors: '*',
      }).then(res => res.json())
          .then((result) => this.setState({data: result.data}),
              (error) => this.setState({error})
          )
  }

   render() {
     return (
         <Router>
         <div>
             <button className='dropButton'>
                 <Link to="/categories/">Categories</Link>
             </button>
             <SearchInput handleInputChange={this.handleInputChange}
                          searchString={this.state.searchString}
                          fetchGifs={this.fetchGifs}
                          fetchSearch={this.fetchSearch}/>
         <Switch>
             <Route exact path="/">
                 <GifsContent data={this.state.data}/>
             </Route>
             <Route path="/categories">
                 <CategoryContent/>
             </Route>
         </Switch>
         </div>
         </Router>
     )
   }

 }

export default App;
