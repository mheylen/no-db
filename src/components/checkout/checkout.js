import React from "react";
import "./checkout.css";


export default function checkout(props){
let subtotalDonuts = props.checkoutList.reduce((acc, curr) => acc + curr.price, 0);

console.log(subtotalDonuts)

let mappedCheckout = props.checkoutList.map(donuts => {
    return (
        
        
        <div key={donuts.id}>
            
            <img src={donuts.image_path} alt=""/>
            <h2>${donuts.price}.00</h2>
            <button onClick={() => props.donutDelete(donuts.id)}>Remove</button>
            <h3>x{donuts.quantity}</h3>
            <h1> sub total = ${donuts.price * donuts.quantity}.00</h1>
        </div>
        );
    
    });

   let totalDonuts = props.checkoutList.reduce((acc,curr) => acc + curr.subtotalDonuts, 0)
    return <div className="checkout-container"> {mappedCheckout}

    <h1> Total ${subtotalDonuts}.00</h1>
    <a href = "https://www.youtube.com/watch?v=5YkhQSB334Q">Check Out</a>
    </div>
};