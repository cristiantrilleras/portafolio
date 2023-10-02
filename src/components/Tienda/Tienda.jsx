import React, { useEffect, useState } from 'react'
import { Header } from '../Header/Header'
import './Tienda.css'

export const Tienda = () => {
  const [products, setProducts] = useState([]) 
  

  useEffect(function () {
    fetch("https://fakestoreapi.com/products").then((res) => {
      return res.json()
    }
    ).then((data) => {
      setProducts(data)
    })
  }, [])
  return (
    <div>
      <Header />
      <h2>tienda</h2>
      <p>hola esta es una prueba</p>
      <input type="text" id='buscador' />
      <button onClick={()=>{setProducts(products.filter((el)=> el.title.includes(document.getElementById("buscador").value)))}}>buscar por nombre</button>
      <p className='tienda'>{
        products.map(function (el){
          return (
            <>
              <h2>{el.title}</h2>
              <img src={el.image} alt="" className='imgtienda' />
              <p>{el.price}</p>
    
            </>
          )
        })
        
        }</p>
      <button onClick={() => {S}}>vamos a ejecutrnos wiii</button>
    </div>
  )
}