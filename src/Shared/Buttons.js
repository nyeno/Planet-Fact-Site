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
  width
}) => {
  return (
    <StyledButton
      color={color}
      background={background}
      activeColor={activeColor}
      hoverColor={hoverColor}
      active={active}
      onClick={setActive}
      width={width}
    >
      {children}
    </StyledButton>
  );
};

export const StyledButton = styled.div`
  color: ${colors.white};
  background-color: ${(props) =>
    props.active ? colors[props.activeColor] : props.background};
  border: 1px solid ${colors['lightGrey']};
  padding: 0.625em 1.25em;
  transition: ease-in-out 250ms;
  display:flex;
  justify-content:center;
  width:${(props) =>
    props.width ?? '500px'};;
  &:hover {
    background: ${(props) => props.hoverColor};
    cursor: pointer;
    transition: ease-in-out 250ms;
  }

`;
export default Button;

