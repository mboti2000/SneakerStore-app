export default (state=[], action) =>{
    switch(action.type){
        case 'ADD_TO_BASKET':
            return [...state, action.payload];
        case 'CLEAR_BASKET':
            return [];
        case 'REMOVE_FROM_BASKET':
            const index = state.findIndex(sneaker => sneaker.id === action.payload);
            return state.filter(sneaker => sneaker.id !== action.payload);
        default:
            return state;
    }
};