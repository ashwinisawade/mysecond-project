import React, { useState } from "react";

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (name.length === 0 || email.length === 0 || password.length === 0) {
            setError(true);
        } else {
           
            setError(false);
            console.log("Name:", name, "Email:", email, "Password:", password);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    
                    <input placeholder="Name" onChange={e => setName(e.target.value)} />
                </div>
                
                {error && name.length === 0 &&
                    <label>"Name can't be Empty"</label>
                }
                <div>
                   
                    <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
                </div>
                
                {error && email.length === 0 &&
                    <label>"Email can't be Empty"</label>
                }
                <div>
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                </div>
                
                {error && password.length === 0 &&
                    <label>"Password can't be Empty"</label>
                }
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}

export default Form;
