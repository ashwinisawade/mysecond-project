import React, { useState } from 'react';

function Mcheckbox() {
    const [fruitsArray, setFruitArray] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        console.log(value, checked);
        if (checked) {
            setFruitArray((fruitsArray) => [
                ...fruitsArray,
                value
            ]);
        } else {
            setFruitArray((fruitsArray) => (fruitsArray.filter((e) => (e == value))));
        }
    };
console.log(fruitsArray);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fruitsArray);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor=''>Select fruits: </label>&nbsp;
                <input type="checkbox" name="fruits" value="Apple" onChange={handleChange} />
                <label htmlFor="">&nbsp;Apple</label>&nbsp;
                <input type="checkbox" name="fruits" value="Banana" onChange={handleChange} />
                <label htmlFor="">&nbsp;Banana</label>&nbsp;
                <input type="checkbox" name="fruits" value="Mango" onChange={handleChange} />
                <label htmlFor="">&nbsp;Mango</label>&nbsp;
                <input type="checkbox" name="fruits" value="Grapes" onChange={handleChange} />
                <label htmlFor="">&nbsp;Grapes</label>&nbsp;
                <input type="submit" name="submit" />
            </form>
        </div>
    );
}

export default Mcheckbox;