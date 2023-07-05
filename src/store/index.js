import { legacy_createStore as createStore} from 'redux';

const initialState = {
    myState: null
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'UPDATE_MY_STATE':
            return {...state, myState: action.payload};
        default:
            return state;
    }
}

const store = createStore(rootReducer);

export default store;