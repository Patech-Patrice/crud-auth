import React from 'react'
import './checkout.css'
import ImgAsset from '../public'
export default function Checkout (props) {
	return (
		<div className={`checkout_checkout ${props.className}`}>
			<img alt='' className='shape' src = {ImgAsset.checkout_shape} />
		</div>
	)
}