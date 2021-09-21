/*
p10.1_product_class.js
Author: Jagrut Gala
Date: 20-09-2021
Practical: 10
Objective: Write a program in react js to create a class component for product. Create and display Information such as product name,product image and price. (Display atleast 5 product)
*/

import React from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component {

    render() {
        return(
            <div style={{margin: "1rem", padding: "1.5rem", border: "1px solid black"}}>
            <h2>Product Name , {this.props.productName}</h2>
            <img src={this.props.source}/>
            <p>Description</p>
            </div>
        )
    }
}

class ProductMenu extends React.Component {
    render() {
        return(
            <div style={{display: "flex", flexWrap: "wrap", width: "100%"}}>
            <Card source="https://picsum.photos/id/1/200/300" productName="AAA"/>
            <Card source="https://picsum.photos/id/2/200/300" productName="BBB"/>
            <Card source="https://picsum.photos/id/3/200/300" productName="CCC"/>
            <Card source="https://picsum.photos/id/4/200/300" productName="DDD"/>
            <Card source="https://picsum.photos/id/5/200/300" productName="EEE"/>
            </div>
        )
    }
}

export default ProductMenu;

