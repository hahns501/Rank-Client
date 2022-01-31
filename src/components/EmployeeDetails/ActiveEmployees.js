import React, {useEffect, useState} from 'react';
import {deleteAllActiveUsers, getAllActiveUsers} from "../../actions/activeUsers";
import {useDispatch, useSelector} from "react-redux";
import ActiveEmp from "./ActiveEmployee/ActiveEmp";
import Button from "@material-ui/core/Button";

const ActiveEmployees = () => {
    const dispatch = useDispatch();
    const activeEmp = useSelector((state) => state.activeUsers);
    const [emptyCheck, setEmptyCheck] = useState(false);

    const handleDeleteAll = () =>{
        dispatch(deleteAllActiveUsers());
    }

    useEffect(() =>{
        dispatch(getAllActiveUsers());
    },[dispatch])

    useEffect(()=>{
        if(activeEmp.length === 0){
            setEmptyCheck(true)
        }else{
            setEmptyCheck(false)
        }
    }, [activeEmp])

    console.log(activeEmp);

    return (
        <div>
            <h1>Active Employees</h1>
            <Button variant="contained" color="primary" onClick={handleDeleteAll}>
                Delete All
            </Button>
            {emptyCheck ? <h1>No Active Employees</h1> : ""}
            <div>
                {activeEmp.map((aEmp) => (
                    <ActiveEmp key={aEmp._id} activeEmp={aEmp}/>
                ))}
            </div>

        </div>
    )
}

export default ActiveEmployees;