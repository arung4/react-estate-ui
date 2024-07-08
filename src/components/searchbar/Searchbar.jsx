import React from 'react'
import './Searchbar.scss'
import { useState } from 'react'

const types=["buy","rent"]

export default function Searchbar() {
    const [query,setQuery]=useState({
        type:"buy",
        location:"",
        minPrice:0,
        maxPrice:0
    })

    const switchType=(val)=>{
        setQuery((prev)=>({...prev,type:val})); 
    }
  return (
    <div className='searchbar'>
       <div className="type">
        {types.map((type)=>(
            <button key={type} onClick={()=>switchType(type)}
            className={query.type === type ? "active":""} 
            >{type} 
            </button>
        ))}
       </div>
       <form>
          <input type="text" name="location" placeholder='City Location' />
          <input type="number" name="minPrice" min={0} max={10000000000} placeholder="Min Price" />
          <input type="number" name="maxPrice" min={0} max={1000000000} placeholder="Max Price" />
          <button>
            <img src="/search.png" alt="" />
          </button>
       </form>
    </div>
  )
}
