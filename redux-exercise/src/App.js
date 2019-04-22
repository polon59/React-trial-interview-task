import React, { Component } from 'react';
import WordBox from './components/WordBox';
import CommonFinder from './components/CommonFinder';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.commonFinder = new CommonFinder();
    this.state = {
      firstSet:'',
      secondSet:'',
      commons:''
    }
  }

  handleChange = (e) =>{
    const newValue = e.target.value;
    if (e.target.id === 'first'){
      this.setState({firstSet:newValue}, ()=>{
        this.findCommonWords();
      })
    }
    else{
      this.setState({secondSet:newValue}, ()=>{
        this.findCommonWords();
      })
    }
  }

  findCommonWords = () =>{
    const {firstSet, secondSet} = this.state;
    let commons = this.commonFinder.findCommons(firstSet, secondSet);
    this.setState({commons:commons})
  }

  render() {
    const {commons} = this.state;
    return (
      <div className="App">
        <WordBox name={'first'} handleChange={this.handleChange}/>
        <WordBox name={'second'}  handleChange={this.handleChange}/>
        <div>
            <p>{commons}</p>
        </div>
      </div>
    );
  }
}

export default App;
