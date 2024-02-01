import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({employees,setEmployees,selectedEmployee,setIsEditing}) {
  const [emp,setEmp]=useState(selectedEmployee[0]);
  console.log("emp",emp)
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
const handleUpdate=(e)=>{
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
     
     for(let i=0;i<employees.length;i++){
      if(employees[i].id === emp.id){
        employees.splice(i,1,emp);
        break;
      }
     }
     setEmployees(employees)
     setIsEditing(false)

     Swal.fire({
      icon:"success",
      title:"Updated!",
      text:`${emp.firstName} ${emp.lastName} employee updated successfully.`,
      showConfirmationButton:false,
    timer:1500})

}
  return (
    <div className='small-container'>
      <form onSubmit={handleUpdate}>
        <h1>Edit employee</h1>
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
        <button type="submit">Update</button> <button className='button muted-button' onClick={()=>setIsEditing(false)}>Cancel</button>
      </form>
    </div>
  )
}

export default Edit
