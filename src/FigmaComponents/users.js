import React from 'react'
import './users.css'
import ImgAsset from '../public'
export default function Users (props) {
	return (
		<div className={`users_users ${props.className}`}>
			<img className='shape' src = {ImgAsset.users_shape} />
		</div>
	)
}