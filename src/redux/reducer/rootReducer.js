import { combineReducers } from "redux";
import { browseBreedReducer } from "./browseBreedReducer";
import { byBreedReducer } from "./byBreedReducer";
import { listOfBreedReducer } from "./listOfBreedReducer";
import { ramdomImageReducer } from "./ramdomImageReducer";

export const reducer = combineReducers({
    randomImage: ramdomImageReducer,
    byBreedDetails: byBreedReducer,
    browseBreedDetails: browseBreedReducer,
    listDetails : listOfBreedReducer,
})