import React, { Component } from 'react';



//import the connect and bindActionsCreators functions
//this is important
//in order to connect the component to the state in Redux
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

//import the action
import {fetchAPIResponse} from "../actions/fetch_api_data";

class Main extends Component {
  //innerState 
  constructor(){
    super();
    this.state = {
      value: ""
    }
  }
 
  //call the action
  componentWillMount= () =>{
    //before mounting
    //make the action
    //remember we passed an argument
     this.props.FetchAPIResponse("Paris");
  }

  //this is the function to search for the city added
  search = () =>{
    //in this case I am using state just for this component
    //doesnt need to be in the general state
    this.props.FetchAPIResponse(this.state.value);
  }

  changeHandler = (e) =>{
   //get the value from the input
    let value= e.target.value;
   //store the value in the state property
    this.setState({
      value : value
    });
    
  }

  render() {
    return (
      <div>
           <div className="form">

            <input name="city" placeholder="Paris" onChange ={this.changeHandler} />
            <button onClick={this.search}> <i className="fas fa-search"></i> </button>
          </div>
        <div className="dashboard">
       

          <h2><i className="fas fa-chart-bar"></i> Dashboard </h2>
            <h2><i className="far fa-compass"></i> Location</h2> 
            <div className="data-container">
            <div className="square">
                <p>City</p>
                <p className="data">{this.props.apiLocation[0]}</p>
              </div>
              <div className="square">
              <p>Country</p>
              <p className="data">{this.props.apiLocation[2]}</p>
              </div>
              <div className="square">
              <p>Time Zone Id</p>
              <p className="data">{this.props.apiLocation[5]}</p>
              </div>
              <div className="square">
              <p>Local Time</p>
              <p className="data">{this.props.apiLocation[7]}</p>
              </div>
            </div>

            <h2><i className="fas fa-tint"></i> Current Conditions</h2>   
            <div className="data-container">
            
              <div className="square">
                <p>Condition</p>
                <p className="data">{this.props.apiConditions[0]}</p>
              </div>
              <div className="square">
                <img src={this.props.apiConditions[1]} alt="current weather condition icon" />
              </div>

            </div> 
            

            <h2><i className="fas fa-thermometer-quarter"></i> Other Conditions </h2>   
            <div className="data-container">
            
            <div className="square">
                <p>Clouds</p>
                <p className="data">{this.props.apiResponse[14]} %</p>
            
              </div>
              <div className="square">
              <p>Feels like (Celcius)</p>
              <p className="data">{this.props.apiResponse[15]} °C</p>
              </div>
              <div className="square">
              <p>Feels like (Fahrenheit)</p>
              <p className="data">{this.props.apiResponse[16]} °F</p>
              </div>
              <div className="square">
              <p>Humidity</p>
              <p className="data">{this.props.apiResponse[13]} %</p>
              </div>

            </div> 
          
        </div>
      </div>
    );
  }
}


function mapStateToProps(state){
//allows us to get the data from the store
//using props
//the value here is a little tricky
//state.ReducerName.reducerProperty
  return{
    apiResponse: state.FetchWeatherReducer.weatherData,
    apiLocation : state.FetchWeatherLocation.location,
    apiConditions: state.FetchCurrentConditions.conditions
  }
}

//remember that to call this property using "props.FetchAPIResponse"
function matchDispatchToProps(dispatch){
  //bind the action to be executed
  return bindActionCreators({FetchAPIResponse:fetchAPIResponse}, dispatch);
}

//we export the component using the connect from Redux
//we pass the functions that connect the props and the actions
export default connect(mapStateToProps, matchDispatchToProps)(Main);//the name of the component

// I think that is all 
