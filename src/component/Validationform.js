import React, { useState } from 'react';

function Validationform() {
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(true);

    const [mobileNumber, setMobileNumber] = useState('');
    const [validMobile, setValidMobile] = useState(true);
    
    const [formData, setFormData] = useState({
        firstName: '',
        surname: '',
        dob: '',
        idNo: '',
        gender: '',
        maritalStatus: '',
        address: '',
        mobileNo: '',
        agree: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: val });

        switch (name) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                setEmail(value);
                setValidEmail(emailRegex.test(value));
                break;
            case 'mobileNo':
                const mobileRegex = /^\d{10}$/;
                setMobileNumber(value);
                setValidMobile(mobileRegex.test(value));
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save form data to localStorage
        localStorage.setItem('formData', JSON.stringify(formData));
        console.log('Form data saved to localStorage:', formData);

        if (validEmail && validMobile) {
            // Submit the form or do something with the valid email and mobile number
            console.log('Valid Email:', email);
            console.log('Valid Mobile Number:', mobileNumber);
        } else {
            console.log('Please fix the errors in the form');
        }
    };

    return (
        <div className="container">
            <div className="text-center">
                <div>
                    <form onSubmit={handleSubmit} id="users">
                        <h1>REGISTRATION FORM</h1>
          
                        <h4>Personal Information:</h4>
                        <label>
                            First Name:
                            <input type="text" name="firstName" placeholder="Enter your First Name" onChange={handleChange} value={formData.firstName} required />
                        </label>
                        <br /><br />
                        <label>
                            Surname:
                            <input type="text" name="surname" placeholder="Enter your Surname" onChange={handleChange} value={formData.surname} required />
                        </label>
                        <br /><br />
                        <label>
                            DOB:
                            <input type="date" name="dob" placeholder="Enter your date of birth" onChange={handleChange} value={formData.dob} required />
                        </label>
                        <br /><br />
                        <label>
                            ID No:
                            <input type="number" name="idNo" placeholder="Enter ID No" onChange={handleChange} required />
                        </label>
                        <br /><br />
                        <label>
                            Email ID:
                            <input type="email" name="email" placeholder="Enter your Email ID" onChange={handleChange} value={email} required />
                            {!validEmail && <p style={{ color: 'red' }}>Please enter a valid email address</p>}
                        </label>
                        <br /><br />
                        <label>
                            Gender:
                            <input type="radio" name="gender" value="male" onChange={handleChange} checked={formData.gender === 'male'} required /> Male
                            <input type="radio" name="gender" value="female" onChange={handleChange} checked={formData.gender === 'female'} /> Female
                            <input type="radio" name="gender" value="other" onChange={handleChange} checked={formData.gender === 'other'} /> Other
                        </label>
                        <br /><br />
                        <label>
                            Marital Status:
                            <input type="radio" name="maritalStatus" value="single" onChange={handleChange} checked={formData.maritalStatus === 'single'} required /> Single
                            <input type="radio" name="maritalStatus" value="married" onChange={handleChange} checked={formData.maritalStatus === 'married'} /> Married
                        </label>
                        <br /><br />
                        <label>
                            Address:
                            <textarea name="address" id="address" cols="20" rows="3" onChange={handleChange} value={formData.address} required></textarea>
                        </label>
                        <br /><br />
                        <label>
                            Mobile No:
                            <input type="tel" name="mobileNo" value={mobileNumber} onChange={handleChange} placeholder="Enter your Mobile No" required />
                            {!validMobile && <p style={{ color: 'red' }}>Please enter a valid 10-digit mobile number</p>}
                        </label>
                        <br /><br />
                        <input type="checkbox" id="agree" name="agree" onChange={handleChange} checked={formData.agree} required />
                        <label htmlFor="agree">I agree I hereby declare that the Information given by me in the Application is true, complete and belief and that nothing has been concealed or distorted.</label><br /><br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Validationform;
