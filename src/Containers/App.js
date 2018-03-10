import React, { Component } from 'react';
import './App.css';
import ProductList from '../Components/ProductList';
import StoreFilter from '../Components/StoreFilter';
import Scroll from '../Components/Scroll';
import InStock from '../Components/InStock';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      store: '',
      instock: false
    }
  }

  componentDidMount() {
  fetch('https://erply-challenge.herokuapp.com/list?AUTH=fae7b9f6-6363-45a1-a9c9-3def2dae206d')
  .then(response => response.json())
  .then(product => this.setState({products: product}))
  }

  handleStoreChange = (e) => {
    this.setState({store: e.target.value})
  };

  handleInStock = (e) => {
    this.setState({instock: e.target.checked})
  };



  render() {
    const { products, store, instock } = this.state;
    const filtered = products.filter(product => {
      if (store !== '' && instock === true) {
        return product.store.toLowerCase().includes(store.toLowerCase()) && product.instock === instock;
      } else if (instock === true && store === '') {
        return product.instock === instock;
      } else if (instock === false && store !== '') {
        return product.store.toLowerCase().includes(store.toLowerCase());
      } else {
        return product;
      }
    });

    return (
      <div className = "fl w-100 h-100 tc">
        <div style={{height: '30vh'}}>
          <h1 style={{height: '10vh'}}>ESHOP</h1>
          <StoreFilter style={{height: '10vh'}} storeChange = {this.handleStoreChange}/>
          <InStock stock = { this.handleInStock }/>
        </div>
        <Scroll>
          <ProductList products = { filtered } />
        </Scroll>
      </div>
    );
  }
}

export default App;
