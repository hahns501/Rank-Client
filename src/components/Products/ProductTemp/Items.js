import React, {useEffect} from 'react';
import './Items.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useDispatch} from "react-redux";

import {deleteProduct} from "../../../actions/products";
import UpdateForm from "../../Form/updateForm";

const Item = ( {item, isManager} ) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [showUpdate, setShowUpdate] = React.useState(false);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();

    useEffect(() =>{
        console.log(isManager);
    },[])

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleEdit = (e) => {
        setAnchorEl(null);
        setShowUpdate(true);
    }

    const handleDelete = (e) => {
        setAnchorEl(null);
        console.log(item._id);
        dispatch(deleteProduct(item._id));
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const showEdit = () =>{
        return(<div>
            <IconButton
                onClick = {handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
        </div>)
    }

    return(
        <div className='item'>
            <div className={"first-line"}>
                <h2>Item ID:{item.lookupCode}</h2>

                {/*<IconButton*/}
                {/*    onClick = {handleClick}*/}
                {/*>*/}
                {/*    <MoreVertIcon />*/}
                {/*</IconButton>*/}
                {/*<Menu*/}
                {/*    id="simple-menu"*/}
                {/*    anchorEl={anchorEl}*/}
                {/*    keepMounted*/}
                {/*    open={open}*/}
                {/*    onClose={handleClose}*/}
                {/*>*/}
                {/*    <MenuItem onClick={handleEdit}>Edit</MenuItem>*/}
                {/*    <MenuItem onClick={handleDelete}>Delete</MenuItem>*/}
                {/*</Menu>*/}

                {isManager ? showEdit() : ""}
            </div>
            <h2>Stock:{item.count}</h2>

            {showUpdate ?  <UpdateForm item={item} showUp={setShowUpdate}/> : ""}
        </div>
    )
}

export default Item;