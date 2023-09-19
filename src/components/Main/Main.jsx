import React from 'react'
import { SectionImage } from '../SectionImage/SectionImage'
import Sectiontext from '../Sectiontext/Sectiontext'
import './Main.css';

export const Main = () => {
  return (
    <main className='Mainp'>
      <Sectiontext/>


      <section className='contenedorimg'>
      <SectionImage/>
      </section>
      
    </main>
  )
}
