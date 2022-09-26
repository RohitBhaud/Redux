import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Postdata = () => {
  const url = "https://upayments-studycase-api.herokuapp.com/api/products"
  const [data,setData]=useState({
    name:"",
    category:"",
    description:"",
    avatar:"",
    price:"",
    devevloperEmail:"roshani@gmail.com"
  })

  function handle(e){
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvc2hhbmlAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL1JvaGl0QmhhdWQiLCJpYXQiOjE2NjM5OTc2NzUsImV4cCI6MTY2NDQyOTY3NX0.be1U_XLto0LgZxFrx0S8BkZWQGbzGlmP0cEBdeoFQqI"

  const submit=(e)=>{
     e.preventDefault()
     axios.post(url,{
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
      },
      data
  }).then((response) => {
    console.log(response)
})
.catch((error) => {
    console.log(error)
})

  }
  return (
    <div>
      <form onSubmit={(e)=>submit(e)}>
        <input onChange={(e)=>handle(e)} id="name" placeholder='name' value={data.name} type="text"></input>
        <input onChange={(e)=>handle(e)}  id="category"  placeholder='category' value={data.category} type="text"></input>
        <input onChange={(e)=>handle(e)} id="description" placeholder='description' value={data.description} type="text"></input>
        <input onChange={(e)=>handle(e)} id="avatar"  placeholder='avatar' value={data.avatar} type="text"></input>
        <input onChange={(e)=>handle(e)} id="price"  placeholder='price' value={data.price} type="number"></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Postdata
