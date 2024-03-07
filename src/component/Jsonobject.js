function Jsonobject(){

    let product={
    productname:"T-shirt",
    price:789,
    rating:{
        stars:4.7,reviews:449,
    },
};
localStorage.removeItem("price");
return(
    <div>
        <h1>JSON Object</h1>
    </div>
);
};
export default Jsonobject;
