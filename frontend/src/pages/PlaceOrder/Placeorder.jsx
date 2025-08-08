import React, { useContext } from 'react'
import "./placeorder.css"
import { StoreContext } from '../../context/StoreContext'

const Placeorder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)
  
  return (
    <form className='place-order'>
      <div className="plac-order-left">
        <p className='title'> Delivery Information </p>
        <div className='multi-fields'>
             <input type='text' placeholder='First name'/>
             <input type='text' placeholder='last name'/>
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='Street'/>
        <div className='multi-fields'>
             <input type='text' placeholder='City'/>
             <input type='text' placeholder='State'/>
        </div>
        <div className='multi-fields'>
             <input type='text' placeholder='Zip-code'/>
             <input type='text' placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="plac-order-right">
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{40}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount()+40}</b> 
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder
