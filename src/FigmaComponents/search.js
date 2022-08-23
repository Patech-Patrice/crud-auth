import React from 'react'
import './search.css'
import ImgAsset from '../public'
export default function Search (props) {
	return (
		<div className={`search_search ${props.className}`}>
			<img className='shape' src = {ImgAsset.search_shape} />
		</div>
	)
}