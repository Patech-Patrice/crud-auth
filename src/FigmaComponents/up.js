import React from 'react'
import './up.css'
import ImgAsset from '../public'
export default function Up (props) {
	return (
		<div className={`up_up ${props.className}`}>
			<img className='shape' src = {ImgAsset.up_shape} />
		</div>
	)
}