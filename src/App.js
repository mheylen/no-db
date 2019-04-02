import React, { Component } from 'react';
import Header from './components/header/header';
import DonutList from './components/donutList/donutList';
import Checkout from './components/checkout/checkout';
import axios from "axios";
import './App.css';

class App extends Component {
constructor(){
  super()
  this.state ={
    donutList: [],
    checkoutList: [],
  };
};


componentDidMount(){
  this.getAllDonuts();
};

getAllDonuts = () => {
  axios
  .get("/api/donuts").then(response => {
    console.log(response.data.results)
    this.setState({
      donutList: response.data.results
    });
  });
};
addToCart = donuts => {
const {checkoutList} = this.state

 

  const newDonut = {
    id: donuts.id,
    name: donuts.name,
    image_path: donuts.image_path,
    description: donuts.description,
    price: donuts.price,
    quantity: 1
  };
  console.log(newDonut);
  axios.post('/api/donuts', newDonut).then(res =>{
    this.setState({
      checkoutList: res.data
    });
  });
}





deleteFromCart = (id) => {
  axios
  .delete(`/api/donuts/${id}`).then(response => {
    this.setState({
  checkoutList: response.data

    })
  })
};



  render() {
   console.log(this.state.checkoutList)
    return (
      <div >
        <Header />
        <Checkout checkoutList={this.state.checkoutList}
        donutDelete ={this.deleteFromCart} />
        <DonutList 
        donutList={this.state.donutList}
        addToCart={this.addToCart} />
        
      </div>
    );
  }
}

export default App;
