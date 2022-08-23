import React from 'react'
import './Logo.css'
import ImgAsset from '../public'
export default function Logo (props) {
	return (
		<div className={`Logo_Logo ${props.className}`}>
			<div className='Icon'>
				<img alt='' className='stroke' src = {ImgAsset.Logo_stroke} />
				<img alt='' className='stroke_1' src = {ImgAsset.Logo_stroke_1} />
				<img alt='' className='stroke_2' src = {ImgAsset.Logo_stroke_2} />
			</div>
			<span className='Aeon'>SIOS</span>
		</div>

	)
}