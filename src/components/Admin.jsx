import React from 'react'
import Table from './Table'
import Form from './Form'

function Admin({employees, addEmployee, deleteEmployee}) {
  return (
    <div>
      
      <Table employees={employees} deleteEmployee={deleteEmployee}/>
      <Form addEmployee={addEmployee} employees={employees}/>
      
    </div>
  )
}

export default Admin
