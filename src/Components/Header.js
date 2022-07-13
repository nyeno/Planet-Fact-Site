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
      <Nav style={{cursor:'pointer'}}>
        <H4>Mercury</H4>
        <H4>Venus</H4>
        <H4>Earth</H4>
        <H4>Mars</H4>
        <H4>Jupiter</H4>
        <H4>Saturn</H4>
        <H4>Uranus</H4>
        <H4>Neptune</H4>
      </Nav>
    </StyledHeader>
  );
};


 const StyledHeader= styled.header`
  color: ${colors.white};
  background-color: ${(props) =>
    props.active ? props.activeColor : props.background};
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.lightGrey};
  padding: 0.725em 1.5em;
  @media only screen and (max-width: 768px) {
   flex-direction:column;
   align-items:center;
   padding: 1.5em 1.5em;
  }
  @media only screen and (max-width: 375px) {
  }
`

const Nav= styled.nav`
  display: flex;
  justify-content: space-between;
  width: clamp(500px,50%,1000px);
  align-items: center;
  cursor:pointer;
  @media only screen and (max-width: 768px) {
    width:100%;
    margin-top:20px
  }
`


export default Header;