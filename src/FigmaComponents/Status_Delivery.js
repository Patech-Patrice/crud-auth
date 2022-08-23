import React from 'react'
import './Status_Delivery.css'
import Status_1 from "./Status_1"
export default function Status_Delivery (props) {
	return (
		<div className={`Status_Delivery_Status_Delivery ${props.className}`}>
			<Status_1 className='Status'/>
		</div>
	)
}