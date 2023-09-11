import * as actionTypes from '../actionTypes'

const initialState = {
    displayField: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_HOUSE_FIELD:
            return { ...state, displayField: true };
        case actionTypes.CLOSE_HOUSE_FIELD:
            return { ...state, displayField: false };
        default:
            return state;
    }
};