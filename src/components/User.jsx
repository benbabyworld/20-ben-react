import React from 'react'
import Table from './Table'
function User({employees}) {
  return (
    <div>
     
      <Table employees={employees}/>
    </div>
  )
}

export default User
