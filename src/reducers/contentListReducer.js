import { actionTypes } from '../actions/actionTypes';
import contentJson from "../services/CONTENTLISTINGPAGE-PAGE1.json";

const contentListReducer = (state = contentJson, action) => {
    switch (action.type) {
        case actionTypes.fetchContent:
            return [...state];
        default:
            return state;
    }
}

export default contentListReducer;