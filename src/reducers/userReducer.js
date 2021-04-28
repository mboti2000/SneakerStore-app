export default (state = {user: ''}, action) =>{
    switch(action.type){
        case 'SIGN_IN':
            return  { user: action.payload };
        case 'SIGN_OUT':
            return  null;
        default:
            return state;
    }
};