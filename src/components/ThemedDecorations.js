import React from 'react'

class ThemedDecorations extends React.Component{

  render(){
    const classyChildren = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      })
    })
    return (
      <div>
        {classyChildren}
      </div>
    )
  }
}

export default ThemedDecorations
