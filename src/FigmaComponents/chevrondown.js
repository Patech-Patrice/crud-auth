import React from 'react'
import './chevrondown.css'
import ImgAsset from '../public'
export default function Chevrondown (props) {
	return (
		<div className={`chevrondown_chevrondown ${props.className}`}>
			<img className='shape' src = {ImgAsset.chevrondown_shape} />
		</div>
	)
}