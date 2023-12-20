import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import './Cart.css'

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
 
  if (cart.length === 0) {
    return (
      <>
        <p className='p'>No hay elementos en el carrito</p>
        <Link to="/">Hacer compras</Link>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p className='p'>Total: $ {totalPrice()}</p>

      <Link to="/checkout">
        {' '}
        <button>Finalizar Compra</button>
      </Link>
    </>
  );
};

export default Cart