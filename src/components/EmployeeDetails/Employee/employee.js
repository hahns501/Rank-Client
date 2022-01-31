import React, {useState} from 'react';
import './employee.css';
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Popper from "@material-ui/core/Popper";
import { makeStyles } from "@material-ui/core/styles";
import {useDispatch} from "react-redux";
import {deleteUser, updateUser} from "../../../actions/users";


const useStyles = makeStyles((theme) => ({
    paper: {
        display: "flex",
        flexDirection: "column",
        textAlign: "right",
        borderRadius: "7px",
        fontSize: "larger",
        border: '1px solid',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
    },
}));

const Employee = ( {employee} ) => {
    const [ updatedUser, setUpdatedUser ] = useState(employee)
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [editAnchor,setEditAnchor] = React.useState(null);
    const open = Boolean(anchorEl);
    const editOpen = Boolean(editAnchor);

    const dispatch = useDispatch();

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleEdit = (e) => {
        setAnchorEl(null);
        setEditAnchor(e.currentTarget)
    }

    const handleDelete = () => {
        dispatch(deleteUser(employee._id));
        setAnchorEl(null);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const updateSubmit = () => {
        dispatch(updateUser(employee._id, updatedUser));
        setEditAnchor(null);
    }

    const updateCancel = () =>{
        setEditAnchor(null);
    }


    return(
        <div className='employee'>
            <div className={"first-line"}>
                <h2>First Name:{employee.fName}</h2>

                <IconButton onClick = {handleClick}>
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

                    <Popper open={editOpen} anchorEl={editAnchor}>
                        <div className={classes.paper}>
                            <div>
                                First Name <input type={"text"} name={"fName"} defaultValue={employee.fName} onChange={(e) => setUpdatedUser({...updatedUser, fName: e.target.value})}/>
                            </div>
                            <div>
                                Last Name <input type={"text"} name={"lName"} defaultValue={employee.lName} onChange={(e) => setUpdatedUser({...updatedUser, lName: e.target.value})}/>
                            </div>
                            <div>
                                Employee ID <input type={"text"} name={"EmpID"} defaultValue={employee.employeeID} onChange={(e) => setUpdatedUser({...updatedUser, employeeID: e.target.value})}/>
                            </div>
                            <div>
                                Password <input type={"text"} name={"Password"} defaultValue={employee.password} onChange={(e) => setUpdatedUser({...updatedUser, password: e.target.value})}/>
                            </div>
                            <div>
                                Employee Type
                                <select id={"employeeType"} name={"empType"} onChange={(e)=> setUpdatedUser({...updatedUser, userType: e.target.value})}>
                                    <option value={"General Manager"}>General Manager</option>
                                    <option value={"Shift Manager"}>Shift Manager</option>
                                    <option value={"Cashier"}>Cashier</option>
                                </select>
                            </div>
                            <div>
                                Manager
                                <select id={"Manager"} name={"Manager"} onChange={(e)=> setUpdatedUser({...updatedUser, manager: e.target.value})}>
                                    <option value={true}>True</option>
                                    <option value={false}>False</option>
                                </select>
                            </div>
                            <button onClick={updateCancel}>Cancel</button>
                            <button onClick={updateSubmit}>Submit</button>
                        </div>
                    </Popper>

                    <MenuItem onClick={handleDelete}>Delete</MenuItem>
                </Menu>
            </div>


            <h2>Last Name:{employee.lName}</h2>
            <h2>Employee ID:{employee.employeeID}</h2>
            <h2>Password:{employee.password}</h2>
            <h2>Employee Type:{employee.userType}</h2>
            <h2>Manager:{String(employee.manager)}</h2>
        </div>
    )
}

export default Employee;