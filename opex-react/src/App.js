import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Workspace from './components/workspace';
import Notification from './components/notification';
import Options from './components/options';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

class App extends Component {

  constructor(){
    super();
    this.state = {
      filterBy: "days"
    }
  }

  componentWillMount(){

  }

  handleFilterUpdate=(option)=>{

    console.log("Option is: "+option);
    this.setState({
        filterBy: option
    });
    
    this.forceUpdate();

  }

  render() {

    let noti = {
      message: 'Something went wrong',
      type: 'error'
    };

    return (
      <div className="App">
        
        <div id="options">
          
          <Options name="options" ref="options" appData={this.state} handlerFilter={this.handleFilterUpdate.bind(this)}/>

        </div>

        <div id="workspace">

          <Workspace name="workspace" ref="workspace" appData={this.state.filterBy} />

        </div>

        <div id="notify">

          <Notification name="notification" ref="notification" noti={noti}/>

        </div>

      </div>
    );
  }
}

export default App;
