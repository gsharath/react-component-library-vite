import React from 'react';
import PropTypes from 'prop-types';

const Title = (props)=>{
    const {children} = props;
    return (
        <>
        <div>{children}</div>
        </>
    )
}

Title.defaultProps = {
    children: ''
  }
  
Title.propTypes = {
    children: PropTypes.any
}
export {Title};