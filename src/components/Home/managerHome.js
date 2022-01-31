import React from 'react'
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

const ManagerHome = () => {
    return (
        <div className={"mainMenu"}>
            <Button variant="contained" color="primary" onClick={() => {alert("Not Implemented")}}>
                Start Transaction
            </Button>
            <Button variant="contained" color="primary" component={Link} to={"/shop"}>
                View Products
            </Button>
            <Button variant="contained" color="primary" component={Link} to={"/employd"}>
                Employee Details
            </Button>
            <Button variant="contained" color="primary" onClick={() => {alert("Not Implemented")}}>
                Sales Report
            </Button>
            <Button variant="contained" color="primary" onClick={() => {alert("Not Implemented")}}>
                Cashier Report
            </Button>
        </div>
    )
}

export default ManagerHome;