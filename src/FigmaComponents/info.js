import React from 'react'
import './info.css'
import ImgAsset from '../public'
export default function Info (props) {
	return (
		<div className={`info_info ${props.className}`}>
			<img alt='' className='shape' src = {ImgAsset.info_shape} />
		</div>
	)
}