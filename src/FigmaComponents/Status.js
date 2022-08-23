import React from 'react'
import './Status.css'
export default function Status (props) {
	return (
		<div className={`Status_Status ${props.className}`}>
			<div className='Ellipse13'/>
			<span className='NewOrder'>New Order</span>
		</div>
	)
}