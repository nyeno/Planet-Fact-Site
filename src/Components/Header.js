/* eslint-disable */
import styled from "styled-components";
import { colors } from "../Shared/colors";
import { H1, H2, H3, H4, P } from "../Shared/typography";
import nav from "../assets/icon-hamburger.svg"

const Header = ({}) => {
  return (
    <StyledHeader>
      <Logo>
        <H2>The planets</H2>
      </Logo>
      <Nav>
        <H4>Mercury</H4>
        <H4>Venus</H4>
        <H4>Earth</H4>
        <H4>Mars</H4>
        <H4>Jupiter</H4>
        <H4>Saturn</H4>
        <H4>Uranus</H4>
        <H4>Neptune</H4>
      </Nav>
      <HamBurger>
        <img src= {nav} />
      </HamBurger>
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
  padding: 1.5em 1.5em;
  
  @media only screen and (min-width: 768px){
    flex-direction: column;
    align-items:center;
    padding: 1.5em 1.5em;
  }
  @media only screen and (min-width: 1440px){
    flex-direction: row;
  }
`;

const Logo = styled.section`
    flex: 1;
`

const Nav = styled.nav`
  display: none;
  @media only screen and (min-width: 768px){
    display: flex;
    width: 100%;
    margin-top: 1.5em;
    justify-content: space-between;
    align-items: center;
  }
  @media only screen and (min-width: 768px){
    flex: 1;
    margin-top: 0.725em;
  }
`

const HamBurger = styled.section`
  margin: auto 0;
  @media only screen and (min-width: 768px){
    display: none;
  }
`

export default Header;