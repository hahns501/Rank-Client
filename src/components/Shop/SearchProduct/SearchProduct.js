import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Products from "../../Products/Products";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search'
import Input from '@material-ui/core/Input'
import {getProducts} from "../../../actions/products";
import './SearchProduct.css'
import Items from "../../Products/ProductTemp/Items";


const SearchProduct = (props) =>{
    const [productSearchData, setProductSearchData] = useState("")
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(productSearchData)
    }

    const onEnterPress = (e) => {
        if(e.which === 13){
            handleSubmit(e)
        }
    }

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    const filterSearch = (products, productSearchData) => {
        if (!productSearchData){
            return products;
        }

        return products.filter((product) => {
            const productName = product.lookupCode;
            return productName.includes(productSearchData)
        })
    }

    const filteredSearch = filterSearch(products,productSearchData)

    return(
        <div className={"SearchProduct"}>
            {/*<input onSubmit={handleSubmit} placeholder={"Search"} name={"productSearchData"} type={"text"} value={productSearchData} onChange={(e) => setProductSearchData(e.target.value)}/>*/}

            <Input className={"adornment"} placeholder={"Search"} name={"productSearchData"} type={"text"} value={productSearchData}
                onChange={(e) => setProductSearchData(e.target.value)}
               onKeyDown={onEnterPress}
                endAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }
            />


        {filteredSearch.map((item) => (
            <Items key={item._id} item={item} isManager={props.isManager} />
        ))}

        {/*<Products/>*/}
        </div>

    )
}

export default SearchProduct