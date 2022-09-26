import * as types from "./actionTypes";
const initialState ={
    books:[],
    isLoading: false,
    isError: false
}

const reducer = (state=initialState, action)=>{
    const {type , payload}= action
    switch(type){
        case types.GET_BOOKS_REQUEST:
            return{
                ...state,
                isLoading: true,
                isError: false
            }
            case types.GET_BOOKS_SUCCESS:
                let product = payload.data.filter((el)=>{
                    if(payload.filter){
                        return el.category == payload.filter
                    }
                 
                    return el.category !== '';
                });
                // if(payload.filter==''){
                //     product = payload.data;
                // }
                // else{
                //     product = payload.data.filter((el)=>{

                //         return el.category = "payload.filter";
                //     })
                // }
                console.log('filter',payload.filter);
                console.log('data',product)
               
                return{
                    ...state,
                    books:product,
                    isLoading: false,
                    isError: false
                }
             case types.GET_BOOKS_SUCCESS:
                return{
                        ...state,
                        isLoading: false,
                        isError: true
                }
        default:
            return state
    }
}

export {reducer}