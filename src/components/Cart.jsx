import React from 'react'
import RestaurantCardData from './RestaurantCardData'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {removeItem } from '../utils/CartSlice';

const Cart = () => {
  const cartItems=useSelector((store)=>store.cart.items)
  console.log(cartItems)
    const dispatch=useDispatch();

    const RemoveHandle = (itemName) => {
      // Pass the item name as an argument to the action
      dispatch(removeItem({ name: itemName }));
    }
  return (
    <>
    <div className='m-10'>
    <div className='mb-5'>
      <h1 className='text-2xl font-bold'>Cart Data 
      </h1>
      </div>
      <div className='flex gap-4 flex-wrap text-center justify-center items-center'>
    {
      cartItems.map((item)=>{
        return <div> <RestaurantCardData {...item}/>
        <button className='bg-green-300 px-2 py-2 my-5 rounded-md' onClick={()=>RemoveHandle(item.name)}>Remove Item</button>

        </div>
      })

    }
    </div>
    </div>
    </>
  )
}

export default Cart