import styled from "styled-components";
import { colors } from "./colors";

const Button = ({
  children,
  color,
  background,
  active,
  hoverColor,
  activeColor,
  setActive,
}) => {
  return (
    <StyledButton
      color={color}
      background={background}
      activeColor={activeColor}
      hoverColor={hoverColor}
      active={active}
      onClick={() => {
        //console.log("here");
        setActive(!active);
      }}
    >
      {children}
    </StyledButton>
  );
};

export const StyledButton = styled.div`
  color: ${colors.white};
  background-color: ${(props) =>
    props.active ? props.activeColor : props.background};
  border: 1px solid ${colors.lightGrey};
  padding: 0.625em 1.25em;
  transition: ease-in-out 250ms;
  &:hover {
    background: ${(props) => props.hoverColor};
    cursor: pointer;
    transition: ease-in-out 250ms;
  }
`;
export default Button;

