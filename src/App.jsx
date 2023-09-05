
import './App.css'
import { Home } from './components/Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import { About } from './components/about/About'
import { Services } from './components/services/Services'
import { Tienda } from './components/Tienda/Tienda'


function App() {


  return (
    <div className>
      <Routes>
        
        <Route Component={Home} path='/'/>
        <Route Component={About} path='/about'/>
        <Route Component={Services} path= '/services'/>
        <Route Component={Tienda} path= '/tienda'/>
      </Routes>
    </div>

    
  )
}

export default App
