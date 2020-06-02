import React, { Component } from 'react';
import classes from './Prods.module.css';

export default class Prods extends Component {
    render(){
        return(
            <div>
                <ul className={classes.Products}>
                    {this.props.products.map(product => (
                        <li key={product._id}>
                            <div className={classes.Product}>
                                <a href={"#" + product._id}>
                                    <img src={product.img} alt={product.productName}/>
                                    <p>
                                        {product.productName}
                                    </p>
                                </a>
                                <div className={classes.ProductPrice}>
                                    <div>
                                        {"$" + product.productCost}
                                    </div>
                                    <button onClick={()=> this.props.addToCart(product)} className={classes.Button}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}