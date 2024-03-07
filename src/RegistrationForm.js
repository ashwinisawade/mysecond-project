import React, { useState } from 'react';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        surname: '',
        dob: '',
        idNo: '',
        passportNo: '',
        gender: '',
        maritalStatus: '',
        address: '',
        residentialAddress: '',
        telephone: '',
        occupation: '',
        dateOfCommencement: '',
        monthlyIncome: '',
        agree: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: val });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save form data to localStorage
        localStorage.setItem('formData', JSON.stringify(formData));
        console.log('Form data saved to localStorage:', formData);
    };

    return (
        <div className="container">
            <div className="text-center">
                <div style={{ backgroundColor: 'pink' }}>
                    <form onSubmit={handleSubmit} id="users">
                        <h1>REGISTRATION FORM</h1>
                        <img src="https://media.istockphoto.com/id/1308542628/photo/young-business-woman-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=oQfuyDCgNm9IUlPP9humlj3R1HB22dDOH74GFgsiwZQ=" alt="employee image" height="200" width="300" />
                        <h4>Personal Information:</h4>
                        <label>
                            First Name:
                        </label>
                        <input type="text" name="firstName" placeholder="Enter your First Name" onChange={handleChange} value={formData.firstName} /><br /><br />
                        <label>
                            Surname:
                        </label>
                        <input type="text" name="surname" placeholder="Enter your Surname" onChange={handleChange} value={formData.surname} /><br /><br />
                        <label>
                            DOB:
                        </label>
                        <input type="date" name="dob" placeholder="Enter your date of birth" onChange={handleChange} value={formData.dob} /><br /><br />
                        <label>
                            ID No:
                        </label>
                        <input type="number" name="idNo" placeholder="Enter ID No" onChange={handleChange}  /><br /><br />
                        <label>
                            Passport No:
                        </label>
                        <input type="number" name="passportNo" placeholder="Enter Passport No" onChange={handleChange} value={formData.passportNo} /><br /><br />
                        <label>
                            Gender:
                        </label>
                        <input type="radio" name="gender" value="male" onChange={handleChange} checked={formData.gender === 'male'} /> Male
                        <input type="radio" name="gender" value="female" onChange={handleChange} checked={formData.gender === 'female'} /> Female
                        <input type="radio" name="gender" value="other" onChange={handleChange} checked={formData.gender === 'other'} /> Other
                        <br /><br />
                        <label>
                            Marital Status:
                        </label>
                        <input type="radio" name="maritalStatus" value="single" onChange={handleChange} checked={formData.maritalStatus === 'single'} /> Single
                        <input type="radio" name="maritalStatus" value="married" onChange={handleChange} checked={formData.maritalStatus === 'married'} /> Married
                        <br /><br />
                        <label>
                            Address:
                        </label>
                        <textarea name="address" id="address" cols="20" rows="3" onChange={handleChange} value={formData.address}></textarea>
                        <br /><br />
                        <label>
                            Residential Address:
                        </label>
                        <input type="text" name="residentialAddress" placeholder="Enter your Residential Address" onChange={handleChange} value={formData.residentialAddress} /><br /><br />
                        <label>
                            Telephone No:
                        </label>
                        <input type="text" name="telephone" placeholder="Enter your number" onChange={handleChange} value={formData.telephone} /><br /><br />
                        <label>
                            Occupation:
                        </label>
                        <input type="text" name="occupation" placeholder="Occupation" onChange={handleChange} value={formData.occupation} /><br /><br />
                        <label>
                            Date of Commencement:
                        </label>
                        <input type="datetime-local" name="dateOfCommencement" placeholder="Enter the date of Commencement" onChange={handleChange} value={formData.dateOfCommencement} /><br /><br />
                        <label>
                            Monthly Income:
                        </label>
                        <input type="text" name="monthlyIncome" placeholder="Enter the Monthly Income" onChange={handleChange} value={formData.monthlyIncome} /><br /><br />
                        <input type="checkbox" id="agree" />
                        <label htmlFor="agree">I agree I hereby declare that the Information given by me in the Application is true, complete and belief and that nothing has been concealed or distorted.</label><br /><br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegistrationForm;
