import {combineReducers} from "redux";

//this is the main file
//we gather all the reducers here so we can export them
//all at once

//import the reducers to use
import FetchWeather from "./fetch_weather";
import FetchLocation from "./fetch_location";
import FetchConditions from "./fetch_conditions";

//we export combineReducers to gather all the reducers in one export

//combine reducers
//create a constant with the reducers
//each reducer is a file
const reducers= combineReducers({
    //well we assign it to another object, in a away
    FetchWeatherReducer : FetchWeather,
    FetchWeatherLocation: FetchLocation,
    FetchCurrentConditions: FetchConditions
});

//export the reducers
//this one goes to the Store file
export default reducers;