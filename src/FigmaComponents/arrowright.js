import React from 'react'
import './arrowright.css'
import ImgAsset from '../public'
export default function Arrowright (props) {
	return (
		<div className={`arrowright_arrowright ${props.className}`}>
			<img alt='' className='shape' src = {ImgAsset.arrowright_shape} />
		</div>
	)
}