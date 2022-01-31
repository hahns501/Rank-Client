import React, {useEffect, useState} from 'react';
import { useDispatch } from "react-redux";
import {updateProduct} from "../../actions/products";
import './Form.css'

// import { TextField, Button, Typography, Paper} from '@material-ui/core'

const UpdateForm = (props) => {
    const [postData, setPostData] = useState({lookupCode:'', count:0,});
    const [updateData, setUpdateData] = useState(props.item);
    const dispatch = useDispatch();

    useEffect(() =>{
        console.log(updateData.lookupCode)
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProduct(props.item._id, updateData));
    }

    const handleCancel = (e) =>{
        props.showUp(false);
        console.log("Cancel")
    }

    return (
        <div>
            <form>
                <label className={"inputForm"}>
                    <h2>Update Item</h2>
                    <label>
                        ID
                        <input name={"lookupCode"} type={"text"} value={updateData.lookupCode} onChange={(e) => setUpdateData({...updateData,lookupCode: e.target.value})}/>
                    </label>
                    <label>
                        Qt
                        <input placeholder={"Item Count"} name={"count"} type="number" value={updateData.count} onChange={(e) => setUpdateData({...updateData,count: e.target.value})}/>
                    </label>
                    <button onClick={handleCancel}>Cancel</button>
                    <button onClick={handleSubmit}>Update</button>
                </label>
            </form>
        </div>
    )
}

export default UpdateForm;