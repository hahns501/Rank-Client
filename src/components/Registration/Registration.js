import React, {useEffect, useState} from 'react';
import { Redirect, useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { createUser } from "../../actions/users";


const Registration = () =>{
    const [ registerData, setRegisterData ] = useState({email:'', fName: '', lName: '', password: '',occupation: '', yearsExp: 0, passwordCheck: '', role:'Select Roll'})
    const [ isAuth, setIsAuth ] = useState(false)
    const [ isLogged, setIsLogged] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();
    let history = useHistory();

    let registers = false;
    let idSet = false;

    useEffect(() =>{
        let user = localStorage.getItem('user')

        if(user !== null){
            setIsLogged(true);
        }else{
            setIsLogged(false);
        }
    },[])

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = (e) => {
        setRegisterData({...registerData, role: "Select Roll"})
        setAnchorEl(null);
    };

    const handleClose2 = (e) => {
        setRegisterData({...registerData, role: "Admin"})
        setAnchorEl(null);
    };

    const handleClose3 = (e) => {
        setRegisterData({...registerData, role: "User"})
        setAnchorEl(null);
    };

    const register = () => {
        // check if passwords match and employee type is set
        if(registerData.password === registerData.passwordCheck){
            registers = true;
        }else{
            alert("Passwords do not match");
        }

        // if true go to home else alert error
        console.log(registerData)
        if(registers){
            console.log(registerData);
            dispatch(createUser(registerData));
            // setIsAuth(true)
        }else{
            console.log("Register Failed");
        }
    };

    // if(isAuth){
    //     return <Redirect isLogged={isLogged}/>
    // }

    function Redirect(props){
        const directHome = () => {
            if(props.isLogged === true){
                history.push('/employd')
            }else{
                history.push('/');
            }
        }

        return(
            <div>
                <h1>New Employee Created</h1>
                <h2>Employee Name: {registerData.fName} {registerData.lName}</h2>
                <h2>Employee ID: {registerData.employeeID}</h2>
                <h2>Password: {registerData.password}</h2>
                <Button onClick={directHome} variant={"contained"} color={"primary"}>Redirect</Button>
            </div>
        )
    }

    return (
        <div>
            <div className={"loginForm"}>
                <label>Register</label>
                <input placeholder={"Email"} type={"text"} value={registerData.email} onChange={(e) => setRegisterData({...registerData, email: e.target.value})}/>
                <input placeholder={"Password"} type={"text"} value={registerData.password} onChange={(e) => setRegisterData({...registerData, password: e.target.value})}/>
                <input placeholder={"Confirm Password"} type={"text"} value={registerData.passwordCheck} onChange={(e) => setRegisterData({...registerData, passwordCheck: e.target.value})}/>
                <input placeholder={"First Name"} type={"text"} value={registerData.fName} onChange={(e) => setRegisterData({...registerData, fName: e.target.value})}/>
                <input placeholder={"Last Name"} type={"text"} value={registerData.lName} onChange={(e) => setRegisterData({...registerData, lName: e.target.value})}/>
                <input placeholder={"Occupation"} type={"text"} value={registerData.occupation} onChange={(e) => setRegisterData({...registerData, occupation: e.target.value})}/>
                <input placeholder={"Years of Experience"} type={"number"} value={registerData.yearsExp} onChange={(e) => setRegisterData({...registerData, yearsExp: e.target.value})}/>

                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    {registerData.role}
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} value={"default"}>Select Roll</MenuItem>
                    <MenuItem onClick={handleClose2} value={"admin"}>Admin</MenuItem>
                    <MenuItem onClick={handleClose3} value={"user"}>User</MenuItem>
                </Menu>

                <button onClick={register}>Sign Up</button>
            </div>
        </div>
    )
}

export default Registration
