import React from 'react';

export const Title = (props)=>{
    const {children} = props;
    return (
        <>
        <div>{children}</div>
        </>
    )
}

Button.defaultProps = {
    children: ''
  }
  
  Button.propTypes = {
    children: PropTypes.any
  }