import React from 'react'
import { NavLink, useNavigate , useSearchParams} from 'react-router-dom'

const Users = () => {
    const [searchParams, setSearchParams]=useSearchParams()
    const showActiveUsers= searchParams.get('filter')=== 'active'
  return (
    <div>
      <NavLink to='1'>User 1</NavLink>
      <NavLink to='2'>User 2</NavLink>
      <NavLink to='3'>User 3</NavLink>
      <div>
        <button onClick={()=>setSearchParams({filter: 'active'})}>Active Users</button>
        <button onClick={()=>setSearchParams({})}>Reset Filter</button>
        {
            showActiveUsers? (<h2>Showing Active users</h2>):(<h2>Showing All Users</h2>)
        }
      </div>
    </div>
  )
}

export default Users
