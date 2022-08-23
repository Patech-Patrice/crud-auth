import React from 'react'
import './chat.css'
import ImgAsset from '../public'
export default function Chat (props) {
	return (
		<div className={`chat_chat ${props.className}`}>
			<img alt='' className='shape' src = {ImgAsset.chat_shape} />
		</div>
	)
}