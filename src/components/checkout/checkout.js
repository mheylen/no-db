import React from "react";
import "./checkout.css";


export default function checkout(props){
let totalDonuts = props.checkoutList.reduce((acc, curr) => acc + curr.price, 0);
console.log(totalDonuts)
let mappedCheckout = props.checkoutList.map(donuts => {
    return (
        
        <div key={donuts.id}>
            <img src={donuts.image_path} alt=""/>
            <h2>${donuts.price}.00</h2>
            <button onClick={() => props.donutDelete(donuts.id)}>Remove</button>
        </div>
        );
    
    });


    return <div className="checkout-container"> {mappedCheckout} 
    <h1> Total ${totalDonuts}.00</h1>
    <h2 button>Check Out</h2>
    </div>
};