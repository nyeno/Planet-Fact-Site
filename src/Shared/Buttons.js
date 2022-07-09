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
        console.log("here");
        setActive(!active);
      }}
    >
      {children}
    </StyledButton>
  );
};

export const StyledButton = styled.div`
  font-family: "Spartan";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 25px;
  letter-spacing: 2.57143px;
  text-transform: uppercase;
  display: inline;
  color: ${(props) => props.color ?? colors.white};
  background-color: ${(props) =>
    props.active ? props.activeColor : props.background};
  border: 1px solid ${colors.powderBlue};
  padding: 10px 20px;
  transition: ease-in-out 250ms;
  &:hover {
    background: ${(props) => props.hoverColor};
    cursor: pointer;
    transition: ease-in-out 250ms;
  }
`;
export default Button;
