import React from 'react'
import {listData} from "../../lib/dummydata"
import Card from "../../components/card/Card.jsx"
import './list.scss'

export default function List() {
  return (
    <div className='list'>
        {listData.map((item,index)=>(
            <Card key={index} item={item} />
        ))}
    </div>
  )
}
