import { legacy_createStore as createStore} from 'redux';

const initialState = {
    categoryState: null
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'UPDATE_CATEGORY_STATE':
            return {...state, categoryState: action.payload};
        default:
            return state;
    }
}

const store = createStore(rootReducer);

export default store;