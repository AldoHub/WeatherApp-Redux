const fetchLocation=(state={
    location:[]
    }, action)=>{
        if(action.type === "FETCH_LOCATION"){
            //as you see, its the same
            //except that we use another property
            //that way we dont mix the state data
            state= {...state, location: action.payload}
        }
    
        return state;
    };
    //at the end export it
    //remember you import the reducers
    //in the main reducer file
    export default fetchLocation;