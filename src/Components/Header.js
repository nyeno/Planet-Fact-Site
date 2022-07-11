/* eslint-disable */
import styled from "styled-components";
import { colors } from "../Shared/colors";
import { H1, H2, H3, H4, P } from "../Shared/typography";

const Header = ({}) => {
  return (
    <StyledHeader>
      <section>
        
      </section>
    </StyledHeader>
  );
};


export const StyledHeader= styled.header`
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
export default Header;