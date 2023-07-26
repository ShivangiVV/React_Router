import React from 'react'
import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const params= useParams()
    // useParam is a hook which returns Key-Value pair.
    const userId = params.Shagani
  return (
  <>
  <div>
      Details about user {userId}.
    </div>
    <Outlet/>
    {/* Here Outlet can't be used as UserDetails component is not nested inside Users in a smiple way UserDetails is not a child route of Users */}
  </>
  )
}

export default UserDetails
