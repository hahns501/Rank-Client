import React, {useEffect, useState} from 'react';
import Button from "@material-ui/core/Button";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { withStyles} from "@material-ui/core/styles";
import EmployeeDetail from "./EmployeeDetails";
import ActiveEmployees from "./ActiveEmployees";
import Registration from "../Registration/Registration";

const styles = {
    root: {

    }
}

const DatabaseInfo = () =>{
    const [dataOption, setDataOption] = useState("allEmployee");

    const handleDataOption = (e, newOption) =>{
        setDataOption(newOption)
    }

    function Display(){
        if(dataOption === 'allEmployee'){
            return (
                    <EmployeeDetail/>
                )
        }else if(dataOption === 'activeEmployee'){
            return(
                    <ActiveEmployees/>
                )
        }else if(dataOption === 'AddEmployee'){
            return (
                    <Registration/>
            )
        }
    }

    return (
        <div>
            <ToggleButtonGroup
                value={dataOption}
                exclusive
                onChange={handleDataOption}
                size={"large"}
            >
                <ToggleButton value={"allEmployee"}>
                    All Employees
                </ToggleButton>
                <ToggleButton value={"activeEmployee"}>
                    Active Employees
                </ToggleButton>
                <ToggleButton value={"AddEmployee"}>
                    Add Employee
                </ToggleButton>
            </ToggleButtonGroup>

        <Display/>
        </div>
    )
}

export default DatabaseInfo;