import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Watchlist from './components/Watchlist'
import Banner from './components/Banner'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<> <Banner/> <Home/> </>}/>
          <Route path='watchlist' element={<Watchlist/>}/>
        </Routes>
      
        </BrowserRouter>
      
    </div>
    </>
  )
}

export default App



//https://api.themoviedb.org/3/movie/popular?api_key=2e546f7b22f819e5444bcd69bee9d4f5&language=en-US&page=2