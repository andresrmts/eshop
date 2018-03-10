import React, { Component } from 'react';
import './App.css';
import ProductList from './ProductList';
import StoreFilter from './StoreFilter';
import Scroll from './Scroll';
import InStock from './InStock';

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
    // const filtered = products.filter(product => {
    //   if (store !== '' && instock === true) {
    //     return product.store.toLowerCase().includes(store.toLowerCase()).instock;
    //   } else if (instock === true && store === '') {
    //     return product.instock === instock;
    //   } else if (instock === '' && store !== '') {
    //     return product.store.toLowerCase().includes(store.toLowerCase());
    //   } else {
    //     return products;
    //   }
    // });
    // const filteredByStore = products.filter(product => {
    //   return product.store.toLowerCase().includes(store.toLowerCase());
    // })

    const filteredByInStock = products.filter(product => {
      if (instock === true) {
        return product.instock === instock;
      } else if (instock === false) {
        return product;
      }
    })
    return (
      <div className = "tc">
        <h1>ESHOP</h1>
        <StoreFilter storeChange = {this.handleStoreChange}/>
        <InStock stock = { this.handleInStock }/>
        <Scroll>
          <ProductList products = { filteredByInStock } />
        </Scroll>
      </div>
    );
  }
}

export default App;
