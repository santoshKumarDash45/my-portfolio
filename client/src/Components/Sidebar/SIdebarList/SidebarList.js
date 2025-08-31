import React from "react";
import "./SidebarList.css"
import ProfilePic from "../../../Assets/Images/FF.jpg"
export const SidebarList = ({expandSidebar}) => {
    return (<>
        <div className="navbar-items">
            {expandSidebar && <div className="sidebar-profile-pic">
                <img src={ProfilePic} />
            </div>}
        </div>

    </>)
}