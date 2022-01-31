import React from 'react';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

const Admin = () => {
    return (
        <div className={"mainMenu"}>
            <h1>Admin Screen</h1>
            <Button style={{textTransform: 'none'}} variant="contained" color="primary" component={Link} to={"/shop"}>
                Projects
            </Button>
        </div>
    )
}

export default Admin