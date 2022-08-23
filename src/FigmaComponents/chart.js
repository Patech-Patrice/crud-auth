import React from 'react'
import './chart.css'
import ImgAsset from '../public'
export default function Chart (props) {
	return (
		<div className={`chart_chart ${props.className}`}>
			<img alt='' className='shape' src = {ImgAsset.chart_shape} />
		</div>
	)
}