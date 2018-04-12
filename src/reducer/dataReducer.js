export default function reducer(state = {
    data: [],
    userInfo:{},
    error: null,    
}, action) {
    switch (action.type) {
        case "DATA_LOADING": {            
            return {
                ...state,
                data: action.payload
            }
        }        
        case "STORE_USER":{
            return{
                ...state,
                userInfo: action.payload
            }
        }
        case "SIGN_OUT":{
            return{
                ...state,
                userInfo: {},
            }
        }       
        default: {
            return state
        }
    }

}