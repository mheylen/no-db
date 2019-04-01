import React from "react";
import "./donutList.css";

export default function donutList(props){
let mappedDonuts = props.donutList.map(donuts => {
    return (
        <div className="donutList-container" key={donuts.id}>
            <h1>{donuts.name}</h1>
            <img src={donuts.image_path} alt=""/>
            <span>{donuts.description}</span>
            <h2>${donuts.price}.00</h2>
            <button onClick={()=> props.addToCart(donuts)} >Throw in the box</button>
        </div>
    
        );
    });
    return <div className= "mapped-container"> {mappedDonuts} </div>
}