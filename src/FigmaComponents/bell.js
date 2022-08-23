import React from 'react'
import './bell.css'
import ImgAsset from '../public'
export default function Bell (props) {
	return (
		<div className={`bell_bell ${props.className}`}>
			<img className='shape' src = {ImgAsset.bell_shape} />
		</div>
	)
}