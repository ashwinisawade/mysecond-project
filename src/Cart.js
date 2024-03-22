import React from 'react'

const Cart = () => {
    const Price = [1,2,3,4,7];
  
    const Total = Price.reduce(function(acc, currv) {
        console.log('acc:${acc} and currv:${currv}');
      
      return acc+currv;
    }, -2)
    console.log(Total);
  
}
  
export default Cart
