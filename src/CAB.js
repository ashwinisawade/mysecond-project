import React from 'react';

function PersonComponent() {
    const FName = "Ashwini";
    const LName = "Ingole";

    function Address(hometown, country) {
        return `${FName} ${LName} ${hometown} ${country}`;
    }

    const Person2 = {
        FName: "Anaya",
        LName: "Ingole"
    };

    // Call the Address method of Person1 with the context of Person2
    const address = Address.call(Person2, "Pune", "India");

    return (
        <div>
            <h1>Person Information</h1>
            <p>Address: {address}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <PersonComponent />
        </div>
    );
}

export default App;


// // applya
// console.log(Person1.Adress.applya(Person2, ["pune","india"]));
// // bind
// const result = (Person1.Adress.bind(Person2, "pune","india"));
// console.log (result());