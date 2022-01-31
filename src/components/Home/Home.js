import React, {useEffect, useState} from 'react'
import './Home.css'

import ManagerHome from "./managerHome";
import NonManagerHome from "./nonManagerHome";

const Home = () => {
    const [isManager,setIsManager] = useState(null);

    useEffect(() =>{
        let user = JSON.parse(localStorage.getItem('user'));

        if(user !== null){
            let manager = user.manager;

            if(manager === true){
                setIsManager(true);
            }else{
                setIsManager(false);
            }
        }

    },[]);

    return(
        <div className={"mainMenu"}>
            <div>
                {isManager ? <ManagerHome /> : <NonManagerHome />}
             </div>
        </div>
    )
}

export default Home;