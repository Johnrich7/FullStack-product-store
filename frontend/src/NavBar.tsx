// import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
      <nav className="bg-gray-800 text-white p-4 flex justify-between">
          <h1 className="text-2xl font-bold"><Link to='/'>Product Store</Link></h1>
          <div>
              <button className="text-blue-500 hover:text-blue-300 px-3 py-2 bg-slate-700 rounded-xl">
                  <Link to='/create'>+</Link>
            </button>
        </div>
    </nav>
  )
}

export default NavBar