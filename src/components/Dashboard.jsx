import React from 'react'
import {employeesData} from '../data/employeeData'
import Swal from 'sweetalert2'
import List from './List'
import Add from './Add'
import Edit from './Edit'
import Header from './Header'
import { useState } from 'react'

function Dashborad() {
  const [employees,setEmployees]=useState(employeesData);
  const [isAdding,setIsAdding]=useState(false);
  const [isEditing,setIsEditing]=useState(false);
  const [selectedEmployee,setSelectedEmployee]=useState(null);
  const handleDelete =(id)=>{
    Swal.fire({
      icon:"warning",
      title:"Are you sure?",
      text:"You wont be able to revert.",
      showCancelButton:true,
      confirmButtonText:"Yes,delete it.",
      cancelButtonText:"No,cancel"

    }).then(result=>{
      if(result.value){
        const [employee]=employees.filter(employee=>employee.id===id)
        Swal.fire({
          icon:"success",
          title:"Deleted!",
          text:`${employee.firstName} ${employee.lastName} employee deleted succcessfully.`,
          showCancelButton:false,
        
    
        })
        const employees1=employees.filter(emp=>emp.id != id);
      console.log(employees1)
      setEmployees(employees1)
      }
      

    })

  }
  const handleEdit=(id)=>{
    const employee= employees.filter(emp=>emp.id == id);
    setSelectedEmployee(employee);
    setIsEditing(true)

  }
  return (
    <div className='container'>
      {!isAdding && !isEditing && <>
        <Header setIsAdding={setIsAdding}/>
        <List employees={employees}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        />
      </>}
      {isAdding && <Add employees={employees}
      setEmployees={setEmployees}
      setIsAdding={setIsAdding}/>}
      {isEditing && <Edit employees={employees}
      setEmployees={setEmployees}
      selectedEmployee={selectedEmployee}
      setIsEditing={setIsEditing}/>}
    </div>
  )
}

export default Dashborad
