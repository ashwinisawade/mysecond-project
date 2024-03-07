import React from "react";

const user ={
    firstname : 'riya',
    lastname :'thakare',
    address : {
        city:'pune',
        country:'India'
    }
};

const { firstname: fname, lastname, age = 10 } = user;

const Objarrray = () => {
    console.log(fname);
    console.log(lastname);
    console.log(age);

    // You can return JSX here or perform other React-related operations
    return (
        <div>
            <p>{fname}</p>
            <p>{lastname}</p>
            <p>{age}</p>
        </div>
    );
};

export default Objarrray;
