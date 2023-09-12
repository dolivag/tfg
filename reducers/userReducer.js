import * as actionTypes from '../actionTypes'

const initialState = {
    houseId: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_HOUSE_ID:
            return { ...state, houseId: action.payload };
        default:
            return state;
    }
};