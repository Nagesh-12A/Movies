import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-3'>
        <Link to='/'className='text-blue-500 text-2xl'>Home</Link>
        <Link to='./Watchlist' className='text-blue-500 text-2xl'>Watchlist</Link>
    </div>
  )
}

export default Navbar