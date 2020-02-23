import React from "react";
import styled from "styled-components";

import { ReactComponent as MoonIcon } from "../assets/moon.svg";
import { ReactComponent as SunIcon } from "../assets/sun.svg";
import { ReactComponent as TreeIcon } from "../assets/tree.svg";
import { ReactComponent as PrincessIcon } from "../assets/princess.svg";
import { ReactComponent as BloodIcon } from "../assets/blood.svg";

const ToggleContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  background: ${props => props.theme.gradient};
  width: 8rem;
  height: 3.5rem;
  margin: 0 auto;
  border-radius: 30px;
  border: 2px solid ${props => props.theme.toggleBorder};
  font-size: 0.5rem;
  padding: 0.5rem;
  overflow: hidden;
  cursor: pointer;

  svg {
    width: 2.5rem;
    height: auto;
    transition: all 0.3s linear;
  }
`;

const Toggle = ({ type, theme, toggleTheme }) => {
  return (
    <ToggleContainer theme={theme} onClick={toggleTheme}>
      {type === "LIGHT" && <SunIcon />}
      {type === "DARK" && <MoonIcon />}
      {type === "NATURE" && <TreeIcon />}
      {type === "SWEET" && <PrincessIcon />}
      {type === "BLOOD" && <BloodIcon />}
    </ToggleContainer>
  );
};

export default Toggle;
