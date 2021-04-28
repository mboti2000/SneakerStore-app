
export default (state=[], action) =>{
    switch(action.type){
        case 'FETCH_SNEAKERS':
            return [...action.payload];
        case 'CLEAR_SNEAKERS':
            return null;
        default:
            return state;
    }
}; 