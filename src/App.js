import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Header from './components/Header/Header';
import DashBoard from './components/DashBoard/DashBoard';
import Form from './components/Form/Form';
// import { connect } from 'react-router-dom;'
// import { updateCost, updateDownPayment } from '../../ducks/reducer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [
        {
          imgUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.dhresource.com%2Falbu_269291508_00-1.0x0%2Ftall-classical-blue-canvas-shoes-couple-canvas.jpg&imgrefurl=https%3A%2F%2Fwww.dhgate.com%2Fstore%2Fproduct%2Ftall-classical-blue-canvas-shoes-couple-canvas%2F143306161.html&docid=bLNthxdIKWs-FM&tbnid=uwQRYcYAgOztiM%3A&vet=10ahUKEwjVuIOko5HeAhXC5p8KHc6jBfIQMwi2ASgSMBI..i&w=675&h=577&bih=1007&biw=1920&q=shoes&ved=0ahUKEwjVuIOko5HeAhXC5p8KHc6jBfIQMwi2ASgSMBI&iact=mrc&uact=8',
          name: "Red Chucks",
          price: 23
        },
        {
          imgUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.dhresource.com%2Falbu_269291508_00-1.0x0%2Ftall-classical-blue-canvas-shoes-couple-canvas.jpg&imgrefurl=https%3A%2F%2Fwww.dhgate.com%2Fstore%2Fproduct%2Ftall-classical-blue-canvas-shoes-couple-canvas%2F143306161.html&docid=bLNthxdIKWs-FM&tbnid=uwQRYcYAgOztiM%3A&vet=10ahUKEwjVuIOko5HeAhXC5p8KHc6jBfIQMwi2ASgSMBI..i&w=675&h=577&bih=1007&biw=1920&q=shoes&ved=0ahUKEwjVuIOko5HeAhXC5p8KHc6jBfIQMwi2ASgSMBI&iact=mrc&uact=8',
          name: "Red Chucks",
          price: 23
        },
        {
          imgUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.dhresource.com%2Falbu_269291508_00-1.0x0%2Ftall-classical-blue-canvas-shoes-couple-canvas.jpg&imgrefurl=https%3A%2F%2Fwww.dhgate.com%2Fstore%2Fproduct%2Ftall-classical-blue-canvas-shoes-couple-canvas%2F143306161.html&docid=bLNthxdIKWs-FM&tbnid=uwQRYcYAgOztiM%3A&vet=10ahUKEwjVuIOko5HeAhXC5p8KHc6jBfIQMwi2ASgSMBI..i&w=675&h=577&bih=1007&biw=1920&q=shoes&ved=0ahUKEwjVuIOko5HeAhXC5p8KHc6jBfIQMwi2ASgSMBI&iact=mrc&uact=8',
          name: "Red Chucks",
          price: 23
        }
     ]      
    }
  }
  render() {
    return (
      <div className="App">
        <Header/>
        {routes}
        {null ? <DashBoard inventory={this.state.inventory} fakey={"sdflnsdfhbwdsiufn"}/>: null}
      </div>
    );
  }
}

export default App;


