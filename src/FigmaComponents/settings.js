import React from 'react'
import './settings.css'
import ImgAsset from '../public'
export default function Settings (props) {
	return (
		<div className={`settings_settings ${props.className}`}>
			<img alt='' className='shape' src = {ImgAsset.settings_shape} />
		</div>
	)
}