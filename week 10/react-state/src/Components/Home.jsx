import React from 'react'
import Item from './Item'

export default function Home(props) {
    const store = props.store
    const shouldDiscount = props.shouldDiscount
    if(shouldDiscount)
  return (
    <div>
        
    {store.map((store,index) => <Item item={store.item} price={store.price*(1-store.discount)} key={index}/>)}

    </div>
  )
  else   return (
    <div>
        
    {store.map((store,index) => <Item item={store.item} price={store.price} key={index}/>)}

    </div>
  )
}
