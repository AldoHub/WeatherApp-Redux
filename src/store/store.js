import logger from "redux-logger"; //allows you to see the state of the app
import thunk from "redux-thunk"; // allows you to write action creators that return a function instead of an action
import { applyMiddleware, createStore } from "redux"; //------------ redux

//here we import the reducers
import Reducers from "../reducers/reducers"; //---------- add the reducers

//First of all we need a place to store the state
// we will name this the store

//you will see Redux / Reducers and Actions are not hard



//--- MIDDLEWARE
// add middleware inside this function
const middleware= applyMiddleware(logger, thunk);


//--- STORE
// this is the store
const StoreRef= createStore(Reducers, middleware);

//we now export the store
//which is configured now
export default StoreRef;
