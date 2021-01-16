
import {combineReducers} from 'redux';


export const productReducer = (state= [],action) =>{
switch (action.type) {
    case "ADDPRODUCT":
         if(state.some(item => action.payload.id === item.id)){
             console.log("true")
             localStorage.setItem("pros",JSON.stringify(action.payload))
            return [...state]
        }
        else{ 
            localStorage.setItem("pros",JSON.stringify(action.payload))
            return [...state,action.payload];
        }
    case "DELETEPRODUCT":
        state.some(item => (action.payload.id === item.id) ? 
          state.slice(state.indexOf(item)) 
         
        : 
         state) 
        localStorage.setItem("pros",JSON.stringify(""))  
        return [...state];
        
    default:
        localStorage.setItem("pros",JSON.stringify(action.payload))
        return state;
        
}
}

export const allReducers = combineReducers({
    product : productReducer
})


