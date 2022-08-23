import React from 'react'
import './arrows.css'
import ImgAsset from '../public'
export default function Arrows (props) {
	return (
		<div className={`arrows_arrows ${props.className}`}>
			<img className='shape' src = {ImgAsset.arrows_shape} />
		</div>
	)
}