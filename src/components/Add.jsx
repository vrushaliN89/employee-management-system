import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Add({employees,setEmployees,setIsAdding}) {
  console.log(employees)

  const [emp,setEmp]=useState({firstName:"",lastName:"",email:"",salary:"",date:""});
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setEmp({...emp,[name]:value})
  }
  const validate =()=>{
    let empObj=[]
    for(let values of Object.values(emp)){
      if(values !=""){
        empObj.push(values)
      }
    }
    if(empObj.length === Object.values(emp).length){return false}else{
      return true
    }
  }
const handleAdd=(e)=>{
  e.preventDefault();

  if(validate()){
    alert("if")

    return Swal.fire({
      icon:"error",
      title:"Error!",
      text:"All fields are required.",
      showConfirmationButton:true
    })
     }
     const id=employees.length+1;
     const newEmployee={id:id,...emp}
     console.log(employees)
     console.log(newEmployee)
     employees.push(newEmployee)
     setEmployees(employees)
     setIsAdding(false)

     Swal.fire({
      icon:"success",
      title:"Added!",
      text:`${emp.firstName} ${emp.lastName} employee added successfully.`,
      showConfirmationButton:false,
    timer:1500})

}
  return (
    <div className='small-container'>
      <form onSubmit={handleAdd}>
        <h1>Add employee</h1>
        <label className="bold">Employee  first name</label>
        <input type="text" name="firstName" value={emp.firstName} onChange={handleChange}/>
        <label className="bold">Employee  last name</label>
        <input type="text" name="lastName" value={emp.lastName} onChange={handleChange}/>
        <label className="bold">Email</label>
        <input type="email" name="email" value={emp.email} onChange={handleChange}/>
        <label className="bold">Salary</label>
        <input type="number" name="salary" value={emp.salary} onChange={handleChange}/>
        <label className="bold">Date</label>
        <input type="date" name="date" value={emp.date} onChange={handleChange}/>
        <button type="submit">Add</button> <button className='button muted-button' onClick={()=>setIsAdding(false)}>Cancel</button>
      </form>
    </div>
  )
}

export default Add
