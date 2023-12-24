import React from 'react'


const ItemList = (props) => {

  
  return (
    <div>
      <h1>Products</h1>
      <hr/>
      <h2>Electronics</h2>
      {
      props.user.map((user,index) => (
        user.category==='Electronics' && <li key = {index}> {user.price} - {user.category} - {user.name} - <button onClick={()=> {props.delete(user.id)}}>Delete Product</button></li>
      ))
      }
      <hr/>
      <h2>SkinCare Product</h2>
      {
      props.user.map((user,index) => (
        user.category==='SkinCare Product' && <li key = {index}> {user.price} - {user.category} - {user.name} - <button onClick={()=> {props.delete(user.id)}}>Delete Product</button></li>
      ))
      }
      <hr/>
    <h2>Food</h2>
      {
      props.user.map((user,index) => (
        user.category==='Food' && <li key = {index}> {user.price} - {user.category} - {user.name} - <button onClick={()=> {props.delete(user.id)}}>Delete Product</button> </li>
      ))
      }
    </div>
  )
}

export default ItemList
