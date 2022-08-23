import React from 'react'
import './logout.css'
import ImgAsset from '../public'
export default function Logout (props) {
	return (
		<div className={`logout_logout ${props.className}`}>
			<img alt='' className='shape' src = {ImgAsset.logout_shape} />
		</div>
	)
}