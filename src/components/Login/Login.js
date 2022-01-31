import React, {useEffect, useState} from 'react';
import { Redirect, useHistory } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {loginUser} from "../../actions/auth";
import LoginTesting from "./LoginTesting/LoginTesting";
import {validateInput} from "./validateInput.js";
import {getUsers} from "../../actions/users";


import './login.css'

const Login = () =>{
    const logState = useSelector(state => state.authReducer);
    const [ loginData, setLoginData ] = useState({username: '', password: ''})
    const [ testLoginData, setTestLoginData ] = useState({employeeID: '11111', password: '1234'})
    const [ isAuth, setIsAuth ] = useState(false);
    const [ dataLoaded, setDataLoaded] = useState(false);
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.users);
    let history = useHistory();

    // const Login = () => {
    //     // input validation and authentication
    //     localStorage.clear();
    //     if(validateInput(loginData.employeeID, loginData.password)){
    //         dispatch(loginUser(loginData)).then(() => {
    //             let user = JSON.parse(localStorage.getItem("user"));
    //             console.log(user);
    //
    //             if (user != null){
    //                 console.log("Login Success")
    //                 setIsAuth(true);
    //             }else{
    //                 alert("Login Failed, please check your credentials");
    //                 console.log("Login Failed")
    //             }
    //         })
    //     }
    // };

    const Login2 = () => {
        dispatch(loginUser(testLoginData)).then(() => {
            let user = JSON.parse(localStorage.getItem("user"));

            if (user != null){
                console.log("Login Success")
                setIsAuth(true);
            }else{
                console.log("Login Failed")
            }
        })
    };

    const Login3 = () => {
        localStorage.clear();

        dispatch(loginUser(loginData)).then(() => {
            let user = JSON.parse(localStorage.getItem("user"));
            console.log(user);

            // if (user != null){
            //     console.log("Login Success")
            //     setIsAuth(true);
            // }else{
            //     // alert("Login Failed, please check your credentials");
            //     console.log("Login Failed")
            // }
        })
    }

    // useEffect(() =>{
    //     dispatch(getUsers())
    //     setDataLoaded(true);
    // },[dispatch])

    // useEffect(() =>{
    //     console.log(employees)
    //     console.log(employees.length)
    //
    //     if(dataLoaded){
    //         if(employees.length === 0){
    //             history.push('/registration')
    //         }
    //     }
    // },[employees])

    if(isAuth){
        return <Redirect to={'/home'} push/>
    }

    const register = () => {
        history.push('/registration')
    }

    const Login4 = () => {
        setIsAuth(true);
    }

    return (
        <div>
            <div className={"loginForm"}>
                <label>Login</label>
                <input placeholder={"Username"} type={"text"} value={loginData.username} onChange={(e) => setLoginData({...loginData, username: e.target.value})}/>
                <input placeholder={"Password"} type={"text"} value={loginData.password} onChange={(e) => setLoginData({...loginData, password: e.target.value})}/>
                <button onClick={Login3} >Sign In</button>
                <button onClick={register} >Register</button>
                <button onClick={Login4} >Bypass</button>
                {/*<button onClick={() => history.push('/registration')}>*/}
                {/*    Registration*/}
                {/*</button>*/}
                {/*<LoginTesting/>*/}
            </div>
        </div>
    )
}

export default Login
