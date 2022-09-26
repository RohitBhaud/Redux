 import * as types from "./actionTypes";  
 import axios from "axios";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvc2hhbmlAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL1JvaGl0QmhhdWQiLCJpYXQiOjE2NjM5OTc2NzUsImV4cCI6MTY2NDQyOTY3NX0.be1U_XLto0LgZxFrx0S8BkZWQGbzGlmP0cEBdeoFQqI"


 
const  getbooks= ({filter}) =>(dispatch)=>{
    dispatch(getBooksRequest())
axios.get("https://upayments-studycase-api.herokuapp.com/api/products",{ headers: { Authorization: `Bearer ${token}` } } )
.then((r)=> dispatch(getBooksSuccess( {data:r.data.products , filter})))
.catch((e)=> dispatch(getBooksFailure(e)))
}

const getBooksRequest = ()=>{
    return{
        type: types.GET_BOOKS_REQUEST,
    }
}

const getBooksSuccess = (payload)=>{
    return{
        type: types.GET_BOOKS_SUCCESS,
        payload
    }
}
const getBooksFailure = ()=>{
    return{
        type: types.GET_BOOKS_FAILURE,
    }
}


export {getbooks,getBooksRequest,getBooksFailure,getBooksSuccess}