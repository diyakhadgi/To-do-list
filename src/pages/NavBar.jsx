import React from 'react'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function NavBar() {
  return (
    <><div className='nav_bar'>
    To-do v1
    <div className="menu_items">
  <Link to= "/"> <div>Home</div></Link>
  <Link to= "/add"><div>Add Todo</div></Link>
      </div>
  </div>
    
    </>
  )
}
