import React from 'react'
import { Header } from '../Header/Header'
import { Product } from '../Product/Product'
import "./Services.css"

export const Services = () => {
  return (
    <div>
      <Header/>
      <section className='services'>


      <h2>these are my services </h2>
      <br />  
      <p>i am a full stack developer and i can help you with your website or app. </p>
        <br />
      <Product/>
      



      </section>
    </div>
  )
}
