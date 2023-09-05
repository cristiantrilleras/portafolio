import React from 'react'
import { Header } from '../Header/Header'
import code from '../../public/code.png'
import design from '../../public/design.png'
import consulting from '../../public/consulting.png'




export const About = () => {
  return (

<div><Header/>
<div className="lg:flex gap-10">
<div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">

  <img src={design} width={100} height={100} />
  <h3 className="text-lg font-medium pt-8 pb-2  ">
    Beautiful Designs
  </h3>
  <p className="py-2">
    Creating elegant designs suited for your needs following core
    design theory.
  </p>
  <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
  <p className="text-gray-800 py-1">Photoshop</p>
  <p className="text-gray-800 py-1">Illustrator</p>
  <p className="text-gray-800 py-1">Figma</p>
  <p className="text-gray-800 py-1">Indesign</p>
</div>
<div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
  <img src={code} width={100} height={100} />
  <h3 className="text-lg font-medium pt-8 pb-2 ">
    Code your dream project
  </h3>
  <p className="py-2">
    Do you have an idea for your next great website? Let's make it a
    reality.
  </p>
  <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
  <p className="text-gray-800 py-1">Photoshop</p>
  <p className="text-gray-800 py-1">Illustrator</p>
  <p className="text-gray-800 py-1">Figma</p>
  <p className="text-gray-800 py-1">Indesign</p>
</div>
<div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
  <img src={consulting} width={100} height={100} />
  <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
  <p className="py-2">
    Are you interested in feedback for your current project? I can
    give you tips and tricks to level it up.
  </p>
  <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
  <p className="text-gray-800 py-1">Photoshop</p>
  <p className="text-gray-800 py-1">Illustrator</p>
  <p className="text-gray-800 py-1">Figma</p>
  <p className="text-gray-800 py-1">Indesign</p>
</div>
</div>
</div>

  )
}




// import React from 'react'
// import { Header } from '../Header/Header'

// export const About = () => {
//   return (
//     <div>
// <Header/>

// <h2>Hola Mundo</h2>

// <p>mi nombre es cristian trilleras
// developer react master experience 7 year

// Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, amet. Doloribus debitis quisquam fugiat eveniet consequuntur porro beatae, voluptatem facere. Obcaecati porro at fugiat sapiente expedita mollitia magni? Iure, atque.

// </p>


//     </div>
//  )
// }
