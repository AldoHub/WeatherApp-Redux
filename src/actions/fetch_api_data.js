//we import axios since we need to call an API
import axios from "axios";

//an action is just a function

export function fetchAPIResponse(city){
    //we return a function that will dispatch the action
    return function(dispatch){
        //make the axios call for the API
        //that is my key, you can get yours is free.

        // --- ADD YOUR APIXU API KEY ----- //
        axios.get("https://api.apixu.com/v1/current.json?key=" + city ).then(response=>{
            
            //get the location object
            //due the structure of the API response
            //which is in objects I did a little code to get the data I need

            let arr = [];
            for (var key in response.data.location) {
              arr.push(response.data.location[key]);
            }
            //here is the important part
            //--- DISPATCH THE ACTION
            //dispatch the FETCH_LOCATION action           
            //We say which action we want to call
            //and in the payload object
            //we add the data, in this case the array created
            //by parsing the object from the API
            //which at this point has data
            dispatch({type:"FETCH_LOCATION", payload:arr});
           
            //these next parts are the same
            //parsing the object to store the data in an array
            //get the current conditions object
            let arr2 = [];
            for (var key2 in response.data.current) {
               arr2.push(response.data.current[key2]);
            
            } 
            //search the index of the conditons array
            console.log(arr2);
            //splice (remove) it from the array
            arr2.splice(5, 1);
        
            // --- DISPATCH THE ACTION
            // --- remember each ACTION has its own property
            //dispatch the FETCH_WEATHER action
            dispatch({type:"FETCH_WEATHER", payload:arr2});

            let arr3 = [];
            for (var key3 in response.data.current.condition) {
              arr3.push(response.data.current.condition[key3]);
            }

            // --- DISPATCH THE ACTION
            //dispatch the FETCH_CONDITIONS action
            dispatch({type:"FETCH_CONDITIONS", payload:arr3});            

            // console.log the FULL response
            console.log(response);



        }).catch(err=>{
            console.log(err)
        });     
        // we got now 1 action, which dispatches 3 actions or events   
        //we need to import this action in our component 
   }
}