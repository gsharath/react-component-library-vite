import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const handleVariant = color => {
  switch (color) {
      case "primary":
          return "blue";
      case "secondary":
          return "brown";
      default:
          return "grey";
  }
};

const ButtonStyled = styled.button`
  background: ${props => handleVariant(props.$variant)};
  color: white;
`
const Button = (props) => {
  const {children, variant} = props;
    return (
        <ButtonStyled $variant={variant}>{children}</ButtonStyled>
    )
}

Button.defaultProps = {
  variant: 'primary'
}

Button.propTypes = {
  variant:  PropTypes.oneOf(['primary', 'secondary', 'teritiary']),
  children: PropTypes.any
}
export {Button};
