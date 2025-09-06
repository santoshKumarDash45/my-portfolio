import React from "react";
import "./SidebarList.css"
import ProfilePic from "../../../Assets/Images/FF.jpg"
import { FcContacts, FcFactory, FcHome, FcNightPortrait, FcSalesPerformance, FcTodoList } from "react-icons/fc";
import { MdBiotech, MdCastForEducation } from "react-icons/md";
export const SidebarList = ({ expandSidebar }) => {
    return (
        <>
            {expandSidebar ? <div className="navbar-items">
                <div className="sidebar-profile-pic">
                    <img src={ProfilePic} />
                </div>
                <ul>
                    <li className="nav-items"><FcHome size={25} />Home</li>
                    <li className="nav-items"><FcNightPortrait size={25} />About</li>
                    <li className="nav-items"><FcFactory size={25} />Work experience</li>
                    <li className="nav-items"><MdBiotech size={25} color="orange" />Tech stack</li>
                    <li className="nav-items"><MdCastForEducation size={25} color="yellow"/>Education</li>
                    <li className="nav-items"><FcTodoList size={25} />Projects</li>
                    <li className="nav-items"><FcSalesPerformance size={25} />Testimonials</li>
                    <li className="nav-items"><FcContacts size={25} />Contact</li>
                </ul>

            </div> :
                <div className="navbar-items-only-icons">
                    <ul>
                        <li className="nav-items"><FcHome size={25} /></li>
                        <li className="nav-items"><FcNightPortrait size={25} /></li>
                        <li className="nav-items"><FcFactory size={25} /></li>
                        <li className="nav-items"><MdBiotech size={25} color="orange" /></li>
                        <li className="nav-items"><MdCastForEducation size={25} color="yellow" /></li>
                        <li className="nav-items"><FcTodoList size={25} /></li>
                        <li className="nav-items"><FcSalesPerformance size={25} /></li>
                        <li className="nav-items"><FcContacts size={25} /></li>
                    </ul>
                </div>
            }
        </>

    )
}