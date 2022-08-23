import React from 'react'
import './NavList.css'
//import Case from "src/FigmaComponents/Case.js"
import chevrondown from "./chevrondown"

	const NavList = (props) => {
	return (
		<div className={`NavList_NavList ${props.className}`}>
			<div className='IconText'>
				{/* <case className='case'></case> */}
				{/* <span className='Product'>Overview</span> */}
			</div>
			{/* <chevrondown className='chevrondown'/> */}
		</div>
	
		
	)
}


export default NavList;