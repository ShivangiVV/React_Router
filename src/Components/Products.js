import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Products = () => {
  return (
    <>
    <div>
      <input type="search" placeholder='Search Products' />
    </div>
    <nav>
        {/* Relative link */}
        {/*Dont include forward slash for netsed routes*/}
        <Link to='feature'> Featured</Link>    
        <Link to='new'> New</Link>
    </nav>
<Outlet/>
{/* Outlet Component is used for rendering the child. */}
    </>
  )
}

export default Products
