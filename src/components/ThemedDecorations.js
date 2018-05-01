import React from 'react'

const ThemedDecoration = (props) => {

	let addClass = props.children.map(child => {
		return React.cloneElement(child, {className: props.theme})
	})

	return (
		<div>
		{addClass}
		</div>
		)
}

export default ThemedDecoration
