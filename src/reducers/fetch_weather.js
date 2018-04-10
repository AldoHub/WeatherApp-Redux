//this is what the redux-thunk allows us to do

//we export a constant
//name it however you want

//this function gets an initial state
const fetchWeatherData=(
    //initial state
    state={
    weatherData:[] // which is set to an empty array
    }, 
    //then we have an action
    action)=>{
        //which has a type property
        //name the property as you want
        if(action.type === "FETCH_WEATHER"){
            //here we add a payload to an existing state
            //we dont overwrite the state
            state= {...state, weatherData: action.payload}
        }
        //here return the object, the state
        return state;
    };
    //of course, export the constant
    export default fetchWeatherData;

    //each reducer will look like this one.
    //create one and the use it as a template
    //lets check the other ones