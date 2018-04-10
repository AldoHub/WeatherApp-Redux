import React, { Component } from 'react';
import Main from "./components/main";

//here we import the store
//----STORE
import StoreRef from "./store/store";
//store provider
//the provider gives us access to the state
import {Provider} from "react-redux";

// Provider needs a property called store
//on which we add our store file

//at this point we have the app ready
//the state is set in a global manner with Redux
//we can access it in any component

//now in order to DO something
//remember the Reducer has an action?
//this action is called whenever we want
//lets see how an action is implemented first
//this is a lot of code, but is because the API call, lets see

class App extends Component {
  render() {
    return (
      <Provider store={StoreRef}>
        <div className="container">
          <h1>Weather App </h1>
          <Main />
        
        </div>
      </Provider>
    );
  }
}

export default App;
