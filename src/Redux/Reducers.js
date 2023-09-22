import { combineReducers } from 'redux'

const business = (state = [], action) => {
  switch(action.type){
    case "ADD_LISTING":
      return[...state, action.value]
    default:
      return state
  }
}



export default combineReducers({ business })