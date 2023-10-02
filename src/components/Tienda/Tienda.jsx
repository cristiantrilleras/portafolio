import React, { useEffect, useState } from 'react'
import { Header } from '../Header/Header'
import './Tienda.css'

export const Tienda = () => {
  const [products, setProducts] = useState([])
  function fetching () {

    fetch("https://fakestoreapi.com/products?sort=desc").then((res) => {
      return res.json()
    }
    ).then((data) => {
      setProducts(data)
    })
  }
  useEffect(function () {
    fetching()
  }, [])
  return (
    <div>
      <Header />
      <p className='titulo'>Tienda de cristian</p>
      <br />

    <div className='caja'>
      <input onKeyDown={(ev) => {
        if (ev.keyCode ==13 )
        setProducts(products.filter((el) => el.title.toLowerCase().includes(document.getElementById("buscador").value)))
      }} onChange={(ev) => {
        if(ev.target.value == "") (fetching())
      }} type="text" id='buscador' />
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