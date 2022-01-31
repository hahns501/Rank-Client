import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import Employee from './Employee/employee'
import {getUsers} from "../../actions/users";


const EmployeeDetail = () =>{
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(getUsers());
    },[dispatch])

    console.log(employees);
    return(
        <div>
            <h1>Employee Detail Page</h1>
            <div>
                {employees.map((emp) => (
                    <Employee key={emp._id} employee={emp}/>
                ))}
            </div>
        </div>
    )
}

export default EmployeeDetail