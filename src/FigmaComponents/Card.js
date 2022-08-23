import React from 'react'
import './Card.css'
import users from "./users"
import up from "./up"
export default function Card (props) {
	return (
		<div className={`Card_Card ${props.className}`}>
			<div className='Top'>
				<div className='Text'>
					<span className='_89935'>89,935</span>
					<span className='Totalusers'>Total users </span>
				</div>
				<div className='icon'>
					<span className='users'/>
				</div>
			</div>
			<div className='Bottom'>
				<div className='Amount'>
					<span className='up'/>
					<span className='_102'>10.2</span>
				</div>
				<span className='_101thisweek'>+1.01% this week</span>
			</div>
		</div>
	)
}