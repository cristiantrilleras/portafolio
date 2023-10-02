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
      <p className='titulo'>Tienda de cristian</p>
      <br />

    <div className='caja'>
      <button onClick={() => { setProducts(products.filter((el) => el.title.includes(document.getElementById("buscador").value))) }}>buscar articulo por nombre: </button>
      <input type="text" id='buscador' />
      </div>
      <br />
      <br />
      <p className='tienda'>{
        products.map(function (el) {
          return (
            <>
              <h2>{el.title}</h2>
              <img src={el.image} alt="" className='imgtienda' />
              <p>{el.price}</p>

            </>
          )
        })

      }</p>


    </div>
  )
}