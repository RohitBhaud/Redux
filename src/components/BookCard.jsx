import React from 'react'

const BookCard = ({bookdata}) => {
  return (
    <div>
       <div>
        <img src={bookdata.avatar} alt="rohit" width={300}/>
        <div>{bookdata.name}</div>
        <div>{bookdata.price}</div>
        <div>{bookdata.category}</div>
       </div>
    </div>
  )
}

export default BookCard
