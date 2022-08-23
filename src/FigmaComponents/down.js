import React from 'react'
import './down.css'
import ImgAsset from '../public'
export default function Down (props) {
	return (
		<div className={`down_down ${props.className}`}>
			<img alt='' className='shape' src = {ImgAsset.down_shape} />
		</div>
	)
}