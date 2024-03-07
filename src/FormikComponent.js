
import { useFormik } from 'formik';
import React from 'react';

function FormikComponent() {
  const formikInitialValues = {
    name: '',
    email: ''
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(values.name)) {
      errors.name = 'Invalid name format';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = 'Invalid email format';
    }

    return errors;
  };

  const handleSubmit = (values) => {
    // Save form data to localStorage
    localStorage.setItem('formData', JSON.stringify(values));
    console.log('Form data saved to localStorage:', values);

    // Display alert message
    alert('Form submitted successfully!');
  };

  const formik = useFormik({
    initialValues: formikInitialValues,
    validate,
    onSubmit: handleSubmit
  });

  return (
    <div>
      <h1>FormikDemo</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Enter Name:</label>
        <input
          type="text"
          id="name"
          name='name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          onTouchStart={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && <p style={{ color: 'red' }}>{formik.errors.name}</p>}
        <br />
        <br />
        <label htmlFor='email'>Enter Email:</label>
        <input
          type="text"
          id="email"
          name='email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          onTouchStart={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && <p style={{ color: 'red' }}>{formik.errors.email}</p>}
        <br />
        <br />
        <input type='submit' value='submit' />
      </form>
    </div>
  )
}

export default FormikComponent;

