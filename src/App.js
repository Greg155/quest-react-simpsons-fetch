import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayQuote from './Components/DisplayQuote';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quote : {}
    }

    this.getQuote = this.getQuote.bind(this);
  }

  // Allow us to retreive a quote when the componenent is mount/c"
  componentDidMount() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(response => response.data)
    .then(data => {
      console.log(data[0]);
      this.setState({
        quote: data[0]
      })
    })
  }

  getQuote() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => response.data)
      .then(data => {
        console.log(data);
        this.setState({
          quote: data[0]
        })
      })
  }



  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <DisplayQuote Quote = {this.state.quote} />
          <button type="button" onClick={this.getQuote}>Get quote</button>
        </header>
      </div>
    );
  }
 
}

export default App;
