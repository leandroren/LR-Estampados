import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({item}) => {
  return (
    <Link to={'/item/' + item.id} className='link'>

    <div className='container'>
      <div className='card border border-0'>
        <img src={item.img} className='card-img-top' alt={item.title}/>
        <div className='card-body text-center'>
          <p>{item.title} $ {item.price}</p>
        </div>
      </div>  
    </div>
    </Link>
  )
}

export default Item