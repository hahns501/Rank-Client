import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Items from './ProductTemp/Items';

import './Product.css'
import {getProducts} from "../../actions/products";


const Products = () =>{
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    // console.log(products)

    return (
        <div className={"productMain"}>
            <div>
                {products.map((item) => (
                    <Items key={item._id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default Products;
