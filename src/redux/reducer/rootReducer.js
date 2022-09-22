import { combineReducers } from "redux";
import { browseBreedReducer } from "./browseBreedReducer";
import { byBreedReducer } from "./byBreedReducer";
import { listOfBreedReducer } from "./listOfBreedReducer";
import { ramdomImageReducer } from "./ramdomImageReducer";
import { userDetailsReducer } from "./userDetailsReducer";

export const reducer = combineReducers({
    randomImage: ramdomImageReducer,
    byBreedDetails: byBreedReducer,
    browseBreedDetails: browseBreedReducer,
    listDetails : listOfBreedReducer,
    userDetailsData: userDetailsReducer
})