import React, { Component } from 'react';
import classes from './Filter.module.css';


export default class Filter extends Component {
    render () {
        return (
            <div className={classes.Filter}>
                <div className={classes.FilterResult}>
                    {this.props.count} Products
                </div>
                <div className={classes.FilterSort}>
                    Filter Price {""}
                    <select value={this.props.price} onChange={this.props.filterPrice}>
                        <option value="">Show All</option>
                        <option value="upto20">Up to $20</option>
                        <option value="price20to50">$20 to $50</option>
                        <option value="price50to100">$50 to $100</option>
                        <option value="price100to200">$100 to $200</option>
                    </select>
                </div>
                <div className={classes.FilterType}>
                    Filter Type {""}
                    <select value={this.props.type} onChange={this.props.filterType}>
                        <option value="">Show All</option>
                        <option value="caake">Cakes</option>
                        <option value="cupcake">Cupcakes</option>
                        <option value="cookies">Cookies</option>
                    </select>
                </div>
            </div>
        )
    }
}