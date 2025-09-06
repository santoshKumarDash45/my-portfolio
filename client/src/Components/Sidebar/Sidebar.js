/** @format */

import React, { useState } from "react";
import "./SIdebar.css";
import { Home } from "../Home/Home";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { SidebarList } from "./SIdebarList/SidebarList";

export const Sidebar = () => {
	const [expandSidebar, setExpandSideBar] = useState(true);

	const handleClickaSidebar = () => {
		setExpandSideBar(!expandSidebar);
	};

	return (
		<div className='container-fluid sidebar-section'>
			<div className={expandSidebar ? "sidebar-expand sidebar" : "sidebar"}>
				<div className='icon-for-sidebar-expand-and-collapse'>
					<p onClick={handleClickaSidebar}>
						{expandSidebar ? (
							<BsChevronCompactLeft size={30} />
						) : (
							<BsChevronCompactRight size={30} />
						)}
					</p>
				</div>
				<SidebarList
					expandSidebar={expandSidebar}
				/>
			</div>
			<div className='container-fluid'>
				<Home />
			</div>
		</div>
	);
};
