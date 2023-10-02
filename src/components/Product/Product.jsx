import React from 'react'

const img1="https://t4.ftcdn.net/jpg/05/72/82/85/360_F_572828530_ofzCYowQVnlOwkcoBJnZqT36klbJzWdn.jpg"

export const Product = () => {
  return (
    <div className='w-96 h-96 bg-slate-600 flex flex-col items-center content-between text-white border-double border-8 shadow-lg shadow-cyan-500/50  '>
      <img src={img1} alt="Tiger"/>
      <h2 className='m-3  font-bold text-3xl text-center'>Category</h2>
      <div>
        <p className='text-center font-medium text-sky-300 mb-3'>Lion Card</p>
        {/* <p className='font-bold text-red-600'>$price</p> */}
        <button className='px-4 rounded-full text-center font-bold text-white border-solid border-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>$comprar</button>
      </div>
    </div>
  )
}
