import React from 'react'

function List({employees,handleEdit,handleDelete}) {
  const formatter= new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD',minimumFractionDigits:null });

  const getData =()=>{
    return employees.map((employee,index)=>{
    return  <tr key={employee.id}>
        <td>{index+1}</td>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.email}</td>
        <td>{formatter.format(employee.salary)}</td>
        <td>{employee.date}</td>
        <td className='text-right'><button className='button muted-button' onClick={()=>handleEdit(employee.id)}>Edit</button></td>
        <td className='text-left'><button className='button muted-button' onClick={()=>handleDelete(employee.id)}>Delete</button></td>
      </tr>
    })
      
  }


  return (
    <div className='contain-table'>
      <table className="striped-table">
        <thead>
          <th>No.</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Salary</th>
          <th>Date</th>
          <th colSpan={2} className="text-center">Actions</th>


        </thead>
        <tbody>
      {employees?.length >0 ?getData():<tr><td colSpan={7} className="text-center"> No emplyoyees</td></tr>}
      </tbody>
      </table>
    </div>
  )
}

export default List
