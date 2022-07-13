/* eslint-disable */
import styled from "styled-components";
import { colors } from "../Shared/colors";
import { H1, H2, H3, H4, P } from "../Shared/typography";

const Header = ({}) => {
  return (
    <StyledHeader>
      <section>
        <H2>The planets</H2>
      </section>
      <nav>
        <H4>Mercury</H4>
        <H4>Venus</H4>
        <H4>Earth</H4>
        <H4>Mars</H4>
        <H4>Jupiter</H4>
        <H4>Saturn</H4>
        <H4>Uranus</H4>
        <H4>Neptune</H4>
      </nav>
    </StyledHeader>
  );
};


export const StyledHeader= styled.header`
  color: ${colors.white};
  background-color: ${(props) =>
    props.active ? props.activeColor : props.background};
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.lightGrey};
  padding: 0.725em 1.5em;
  
  }
`;
export default Header;