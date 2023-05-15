import { combineReducers } from "redux";
import authReducer from "./authReducer";
import notesReducer from "./notesReducer";
const rootReducer = combineReducers({
    auth:authReducer,
    notes:notesReducer,
})

export default rootReducer;