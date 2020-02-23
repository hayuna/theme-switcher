import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  color: ${props => props.theme.headerColor};
`;

const Header = ({ children, theme }) => {
  return <StyledHeader theme={theme}>{children}</StyledHeader>;
};

export default Header;
