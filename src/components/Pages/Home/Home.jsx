import React from 'react'
import { Header } from '../../Header/Header'
import { Main } from '../../Main/Main'
import './Home.css'
import { Footer } from '../../Footer/Footer'

export const Home = () => {
  return (
    <div className='Home'>
    <Header />
    <Main/>
    <Footer/>
    </div>
  )
}
