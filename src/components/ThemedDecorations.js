// Code ThemedDecoration Component Here
import React from 'react'


const ThemedDecoration = (props)=>{
  const themeProp = props.theme
  return(
    <div>
      {React.Children.map(props.children, child=>{
        return <div className= {themeProp} >child</div>
      })}
    </div>
  )
}

export default ThemedDecoration
