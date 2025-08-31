/** @format */

import React, { useState } from "react";
import "./SIdebar.css";
import { Home } from "../Home/Home";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

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
			</div>
			<div className='container'>
				<Home />
			</div>
		</div>
	);
};
