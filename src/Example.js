import React from 'react'
import { Formik, Field,Form } from 'formik'
import { signupvalidation } from './Signupvalidation'
import { Form } from 'react-router-dom'
const initialValues={
    name:'',
    email:'',
    password:'',
    cpassword:''
}

function example() {
   
 return (
    <div>
        <Formik 
         initialValues={initialValues}
         validationschema={signupvalidation}
        >
            {({errors})=>(
                <Form>
            <label htmlFor="name" >Name</label>
            <br/>
            <Field type="name" name="name"></Field>
            
            <br/>{errors.name && <small>{errors.name}</small>}<br/>
            <label htmlFor="email" >Email</label>
            <br/>
            <Field type="email" name="emaul"></Field>
            <br/>{errors.email && <small>{errors.email}</small>}<br/>
            <label htmlFor="password" >Password</label>
            <br/>
            <Field type="password" name="password"></Field>
            <br/>{errors.password && <small>{errors.password}</small>}<br/>
            <label htmlFor="name" >Confirm Password</label>
            <br/>
            <Field type="cpassword" name="cpassword"></Field>
            <br/>{errors.cpassword && <small>{errors.cpassword}</small>}<br/>
            </Form>
            )}
        <form onSubmit={handleSubmit}>
            <button type="submit">submit</button>
            
        </form>
      
        </Formik>
    </div>
  )
}

export default example
