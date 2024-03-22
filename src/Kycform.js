import React from 'react'
import { useState } from 'react';

function Kycform  () {
  const [formData, setFormData] = useState({
    Prefix:'',
    FirstName: '',
    MiddleName: '',
    LastName: '',
    AccountNo: '',
    ResidentialStatus: '',
    ResidentIndividual: '',
    NonResidentIndian: '',
    ForeignNational: '',
    PersonofIndianorigin: '',
    OccupationType:'',
    SService:'',
    OOthers:'',

    agree: false
});

const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: val });
  return (
    <div className="container">
    <div className="text-center">
    <div>
      <form ><h1>KYC DETAILS UPDATION</h1>
      <h2>STATE BANK OF INDIA</h2>
      <div align="left">
      <h4>1.PERSONAL DETAILS:</h4></div>
      <div align="left"> <h5>Name(Same as ID proof):</h5></div>
      <label>
   Prefix:
  <input type="text" name="Prefix" placeholder="Enter your Prefix" onChange={handleChange} value={formData.firstName} required /></label>
      <label>
   First Name:
  <input type="text" name="firstName" placeholder="Enter your First Name" onChange={handleChange} value={formData.firstName} required /></label>
  <label>
  Middle Name:
 <input type="text" name="Middle Name" placeholder="Enter your Middle Name" onChange={handleChange} value={formData.firstName} required /> 
  </label>
  
  <label>
  LastName:
 <input type="text" name="Last Name" placeholder="Enter your Last Name" onChange={handleChange} value={formData.firstName} required /> 
</label><br/><br/>
<div align="left"> <h5>Account No:</h5></div>
 <label >
Account No:
 <input type="text"  name="Account No:" placeholder="Enter your Account No" onChange={handleChange} value={formData.firstName} required />  
</label>
<br/><br/>
<div align="left"> <h5>Residential Status:</h5></div>
<label htmlFor=''>Residential Status: </label>&nbsp;
                <input type="checkbox" name="Status" value="Resident Individual" onChange={handleChange} />
                <label htmlFor="">&nbsp;Apple</label>&nbsp;
                <input type="checkbox" name="Status" value="Non Resident Indian" onChange={handleChange} />
                <label htmlFor="">&nbsp;Banana</label>&nbsp;
                <input type="checkbox" name="Status" value="Foreign National" onChange={handleChange} />
                <label htmlFor="">&nbsp;Mango</label>&nbsp;
                <input type="checkbox" name="fStatus" value="Person of Indian Origin" onChange={handleChange} />
                <label htmlFor="">&nbsp;Grapes</label>&nbsp;

                       

     
      </form>
      <button>submit</button>
    </div>
    </div>
    </div>
  )
}}

export default Kycform
