import React, { Component } from 'react';
import classes from './Cart.module.css';


export default class Cart extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div>
                {cartItems.length === 0 ? (
                <div className={classes.Cart} className={classes.CartHeader}>Cart is Empty</div>
                ) : (
                <div className={classes.Cart} className={classes.CartHeader}>You have {cartItems.length} items in your cart{" "}</div>

                )}
                <div>
                <div className={classes.Cart}>
                    <ul className={classes.CartItems}>
                        {cartItems.map(item => (
                            <li key={item._id}>
                                <div>
                                    <img src={item.img} alt={item.productName} />
                                </div>
                                <div>
                                    <div>{item.productName}</div>
                                    <div className={classes.Right}>
                                        ${item.productCost} X {item.count}{" "}
                                    <button style={{backgroundColor:"#c0c0c0", color:"black", paddingTop:"0", paddingBottom:"0"}} onClick={() => this.props.removeFromCart(item)}>
                                        Remove
                                    </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                {cartItems.length !== 0 && (
                    <div className={classes.Cart}>
                    <div className={classes.Total}>
                        <div> Total: {" "}
                            ${cartItems.reduce((a,c) => a + (c.productCost*c.count), 0).toFixed(2)}
                            </div>
                            <button>Proceed</button>
                    </div>
                    </div>
                )}
            </div>
            </div>
            
        );
    }
}