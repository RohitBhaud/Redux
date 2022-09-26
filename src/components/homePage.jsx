import React,{useEffect} from 'react'
import BookCard from './BookCard'
import { useDispatch, useSelector } from 'react-redux'
import { getbooks } from '../Redux/AppReducer/action'
import { Link  } from 'react-router-dom'
import { useState } from 'react'


const BookList = () => {
  const dispatch = useDispatch()
  const data = useSelector(state=> state.AppReducer.books)
  const [filter, setFilter] = useState("")
  const [sort, setSort] = useState("")

  console.log(data)
  
  useEffect(()=>{
      
      dispatch(getbooks({filter}))
      
    },[filter])
    const handleChange=(e)=>{
        console.log(e.target.value)
      setFilter(e.target.value)
    }

  return (
    <>
    <select name="" id="" onChange={handleChange} >
    <option value="">reset</option>
        <option value="Clothing">Clothing</option>
        <option value= "Electronics">Electronics</option>
        <option value="Furniture">Furniture</option>
    </select>
   
<div style={{display:'grid', gridTemplateColumns:"500px 500px 500px" , gridGap:"20px"}} >
{data.length>0 && data.map(singlebook=>{
        return(  <div  key={singlebook.id}>
             <Link to={`/books/${singlebook.id}`}> <BookCard bookdata = {singlebook}/></Link>
            </div>
        )
      })}

</div>
    
    </>
  )
}

export default BookList
