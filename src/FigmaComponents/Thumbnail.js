import React from 'react'
import './Thumbnail.css'
import ImgAsset from '../public'
export default function Thumbnail () {
	return (
		<div className='Thumbnail_Thumbnail'>
			<img alt='' className='image3' src = {ImgAsset.Thumbnail_image3} />
		</div>
	)
}