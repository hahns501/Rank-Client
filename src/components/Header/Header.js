import { NavLink, useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useState, useEffect} from "react";
import './Header.css'
import {logoutUser} from "../../actions/auth";

const Header = () => {
    const logState = useSelector(state => state.authReducer);
    const [isLogged, setIsLogged] = useState(false);
    const dispatch = useDispatch();
    // let history = useHistory();

    useEffect(()=>{
        let user = JSON.parse(localStorage.getItem('user'));

        if(user !== null){
            setIsLogged(true);
        }else{
            setIsLogged(false);
        }
    },[logState]);

    // useEffect(() => {
    //     if(isLogged === false){
    //         history.push('/')
    //     }else{
    //         history.push('/home');
    //     }
    // }, [isLogged])

    const Logout = () => {
        console.log("Logging out");
        setIsLogged(false);
        dispatch(logoutUser());
    }

    const userLog = () => {
        console.log(localStorage.getItem('user'))
    }

    return(
        <div className={"Header"}>
            <nav>
                <h1>Image Ranker</h1>
                {/*<button onClick={userLog}>User</button>*/}
                <ul>
                    {/*<li><NavLink to={'/home'}>Home</NavLink></li>*/}
                    {isLogged ? <li><NavLink to={'/'} onClick={Logout}>Sign Out</NavLink></li> : ""}
                </ul>
            </nav>
        </div>
    )
}

export default Header

