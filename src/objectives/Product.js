import React from "react";

function Product(params) {
    return (
        <div style={{}}>
            <h1>{params.myName}</h1>
            <h2>Description: {params.description}</h2>
            <h2>Price: {params.price}</h2>

        </div>
    )
}

export default Product;