import React from 'react'
import './more_1.css'
import ImgAsset from '../public'
export default function More_1 (props) {
	return (
		<div className={`more_1_more ${props.className}`}>
			<img className='shape' src = {ImgAsset.more_1_shape} />
		</div>
	)
}