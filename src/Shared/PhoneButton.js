import styled from "styled-components";
import { colors } from "./colors";

const PhoneButton = ({
  children,
  color,
  background,
  active,
  activeColor,
  setActive,
  width,
}) => {
  return (
    <StyledButton
      color={color}
      background={background}
      activeColor={activeColor}
      active={active}
      onClick={setActive}
      width={width}
    >
      {children}
    </StyledButton>
  );
};

export const StyledButton = styled.div`
  & > H4 {
    color: ${(props) => (props.active ? colors["white"] : colors["lightGrey"])};
  }
  border-width: 0 0 0.4em 0;
  border-style: solid;
  border-color: ${(props) =>
    props.active ? colors[props.activeColor] : "transparent"};
  
  transition: ease-in-out 250ms;
  width: 100%;
  &:hover {
    border-color: ${(props) =>
      props.active ? colors[props.activeColor] : colors["darkGrey"]};
    cursor: pointer;
    transition: ease-in-out 250ms;
  }
  text-align: center;
`;
export default PhoneButton;
