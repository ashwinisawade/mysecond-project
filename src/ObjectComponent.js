import React from 'react';

function ObjectComponent() {
    const sales = {
        Ana: 30,
        Swara: 40,
        Riya: 20
    };

    
    console.log(Object.entries(sales));

    function sumSales(obj) {
        let sum = 0;
        for (let value of Object.values(obj)) {
            sum += value;
        }
        return sum;
    }

    
    function personSales(obj) {
        for (let [key, value] of Object.entries(obj)) {
            console.log(`${key} had $${value} sales`);
        }
    }

   
    console.log('Total sales:', sumSales(sales));
  
    personSales(sales);

    return null; 
}

export default ObjectComponent;

