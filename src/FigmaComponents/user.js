import React from 'react'
import './user.css'
import ImgAsset from '../public'
export default function User (props) {
	return (
		<div className={`user_user ${props.className}`}>
			<img alt='' className='shape' src = {ImgAsset.user_shape} />
		</div>
	)
}