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
    clicks:0,
    show:true
  };

};

IncrementItem = () => {
  this.setState({click: this.state.clicks +1});
};
DecreaseItem = () => {
  this.setState({ clicks: this.state.click -1});
};
ToggleClick = () => {
  this.setState({ show: !this.state.show})
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
  const newDonut = {
    id: donuts.id,
    name: donuts.name,
    image_path: donuts.image_path,
    description: donuts.description,
    price: donuts.price,
    quantity: 0
  };
  console.log(newDonut);
  axios.post('/api/donuts', newDonut).then(res =>{
    this.setState({
      checkoutList: res.data
    });
  });
  
};

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
