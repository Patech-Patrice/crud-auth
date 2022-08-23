import React from 'react'
import './check.css'
import ImgAsset from '../public'
export default function Check (props) {
	return (
		<div className={`check_check ${props.className}`}>
			<img alt='' className='shape' src = {ImgAsset.check_shape} />
		</div>
	)
}