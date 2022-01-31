import React from 'react';
import {SidebarItems} from "./SidebarItems";
import {useHistory} from 'react-router-dom';

const Sidebar = () => {
    const history = useHistory();

    return (
        <div className={"Sidebar"}>
            {/*User Login/Profile*/}
            <ul className={"SidebarItems"}>
            {SidebarItems.map((val, key) => {
                return(
                    <li
                        className={"row"}
                        key={key}
                        onClick={() => {history.push(val.link)}}
                    >
                        <div id={"title"}>{val.title}</div>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default Sidebar