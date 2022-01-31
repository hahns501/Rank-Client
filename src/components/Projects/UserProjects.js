import React, {useState, Fragment} from "react";
import {Projects} from "./Projects"
import './UserProjects.css'
import { useHistory } from 'react-router-dom'
// import SwapVertIcon from '@mui/icons-material/SwapVert';

import ColoredCircle from "./ColoredCircle";

const UserProjects = () => {
    const [userData, setUserData] = useState({userID: 1, userName: 'Sang Han'})
    const [userProjects, setUserProjects] = useState(0)
    const history = useHistory();

    const statusColor = (status) => {
        if (status){
            return (
                <div>
                    <ColoredCircle color={"#92C353"}/> Complete
                </div>
            )
        }else{
            return (
                <div>
                    <ColoredCircle color={"#febe10"}/> Incomplete
                </div>
            )
        }
    }

    return (
        <div className={'UserProjects'}>
            <h2> User Projects</h2>
            <table id={'Projects'}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Assigned</th>
                        <th>Due</th>
                    </tr>
                </thead>
                <tbody>
                    {Projects.map((val, key) => {
                       return(
                           <tr
                           onClick={() => {history.push('/projects/rank/' + val.ProjectID)}}
                           key = {key}
                           >
                               <th>
                                   {val.Name}
                               </th>
                               <td>
                                   {statusColor(val.Status)}
                                   {/*{String(val.Status)}*/}
                               </td>
                               <td>
                                   {val.AssignDate}
                               </td>
                               <td>
                                   {val.Due}
                               </td>

                           </tr>

                       )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default UserProjects