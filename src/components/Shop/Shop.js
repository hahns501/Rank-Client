import React, {useEffect, useState} from 'react';
import Products from './../Products/Products';
import Form from "./../Form/Form";
import SearchProduct from "./SearchProduct/SearchProduct";
import './Shop.css'
import AddIcon from '@material-ui/icons/Add';

const Shop = () => {
    const [formShow, setformShow] = useState(false)

    const showInput = () => {
        setformShow(!formShow)
    }

    useEffect(() =>{
        let user = JSON.parse(localStorage.getItem('user'));

        console.log(user.manager);

    },[]);

    return(
        <div className={"Shop"}>
            <div className={"productBar"}>
                <h1 className={"pro"}>Products</h1>
                {JSON.parse(localStorage.getItem('user')).manager ? <AddIcon className={"addIcon"} onClick={showInput}/> : ""}
            </div>

            {formShow ? <Form/> : ""}
            <SearchProduct isManager={JSON.parse(localStorage.getItem('user')).manager}/>
        </div>
    )
}

export default Shop;