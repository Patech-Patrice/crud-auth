import React from 'react'
import './Status_2.css'
import Status_Delivery from "./Status_Delivery"
export default function Status_2 (props) {
	return (
		<div className={`Status_2_Status ${props.className}`}>
			<Status_Delivery className='Status_Delivery'/>
		</div>
	)
}