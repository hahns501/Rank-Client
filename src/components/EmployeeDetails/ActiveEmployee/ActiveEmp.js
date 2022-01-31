import React from 'react';
import './ActiveEmp.css';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {deleteActiveUser} from '../../../actions/activeUsers';
import {useDispatch} from "react-redux";

const ActiveEmp = ({activeEmp}) => {
    const dispatch = useDispatch();

    const handleDelete = () =>{
        dispatch(deleteActiveUser(activeEmp._id));
    }

    return (
        <div className={"activeEmp"}>
            <div className={"first-line"}>
                <h2>Name:{activeEmp.name}</h2>
                <DeleteOutlineIcon onClick={handleDelete}/>
            </div>
            <h2>UserType:{activeEmp.userType}</h2>
            <h2>SessionKey:{activeEmp.sessionKey}</h2>
            <h2>Manager:{String(activeEmp.manager)}</h2>
        </div>
    )
}

export default ActiveEmp;