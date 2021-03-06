import {
    LOGIN_USER, REGISTER_USER, AUTH_USER, 
    LIST_ADD, GET_LIST, GET_DETAIL,LIST_UPDATE, LIST_DELETE, FIND_TITLE, FIND_USERNAME
} from '../_actions/types';

const Reducer = (state = {},action) =>{
    switch (action.type){
        case LOGIN_USER:
            return{...state, loginSuccess: action.payload}

        case REGISTER_USER:
            return {...state, register : action.payload}
          
        case AUTH_USER:
            return{ ...state, userData : action.payload}
            

        case LIST_ADD:
            return{ ...state, listData : action.payload}      
            
        case GET_LIST:
            return{ ...state, getList: action.payload}
            
        case GET_DETAIL:
            return{ ...state, getDetail: action.payload}
           
        case LIST_UPDATE:
            return{ ...state, updateSuccess: action.payload}
        
        case LIST_DELETE:
            return{ ...state, deleteSuccess: action.payload }

        case FIND_TITLE:
            return{...state, getList: action.payload}
        
        case FIND_USERNAME:
            return{...state, getList: action.payload}
        default:
            return state;
    }
}
export default Reducer;
