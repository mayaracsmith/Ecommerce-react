import React from 'react';
import classes from './Products.module.css';
import data from './products.json';
import Prods from './Prods.js/Prods';
import Filter from '../Filter/Filter';
import Cart from '../Cart/Cart';


class Products extends React.Component{
    constructor(){
        super();
        this.state = {
            products: data.products,
            cartItems: [],
            price: "",
            type: ""
        };
    }

removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
        cartItems: cartItems.filter((x) => x._id !== product._id),
    });   
};

addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item => {
        if(item._id === product._id){
            item.count++;
            alreadyInCart = true;
        }
    });
    if(!alreadyInCart){
        cartItems.push({...product, count: 1});
    }
    this.setState({cartItems});
}

filterPrice = (event) => {
console.log(event.target.value);
const price = event.target.value;

if(event.target.value === ""){
    this.setState({price: event.target.value, products: data.products});
} else {
    this.setState({
        price: price,
        products: data.products.filter((product) => product.price.indexOf(event.target.value) >= 0
        ),
    });
}
};

filterType = (event) => {
console.log(event.target.value);

if(event.target.value === ""){
    this.setState({type: event.target.value, products: data.products});
} else {
    this.setState({
        type: event.target.value,
        products: data.products.filter((product) => product.type.indexOf(event.target.value) >= 0
        ),
    });
}
};

render (){
    return (
        <div className={classes.Content}>
            <div className={classes.Main}>
                <Filter count={this.state.products.length} 
                price={this.state.price} 
                type={this.state.type}
                filterPrice={this.filterPrice}
                filterType={this.filterType}
                 />
                <Prods products={this.state.products} addToCart={this.addToCart} />
            </div>
            <div className={classes.Sidebar}>
                <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} />
            </div>
        </div>
    );
}
}

export default Products;