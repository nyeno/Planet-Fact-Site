/* eslint-disable */
import React, {useState} from "react";
import styled from "styled-components";
import { colors } from "../Shared/colors";
import { H1, H2, H3, H4, P } from "../Shared/typography";
import nav from "../assets/icon-hamburger.svg"
import { Link } from "react-router-dom";
const Header = ({}) => {
  const [hamClicked, setHamClicked]= useState(false)
  const handleHamClick =()=>{
    setHamClicked(!hamClicked)
  }

  return (
    <StyledHeader>
      <Logo>
        <H2>The planets</H2>
      </Logo>
      <Nav>
       <Link to={`/mercury`}><H4>Mercury</H4></Link>
       <Link to={`/venus`}> <H4>Venus</H4></Link>
       <Link to={`/earth`}><H4>Earth</H4></Link>
       <Link to={`/mars`}><H4>Mars</H4></Link>
       <Link to={`/jupiter`}> <H4>Jupiter</H4></Link>
       <Link to={`/saturn`}><H4>Saturn</H4></Link>
       <Link to={`/uranus`}><H4>Uranus</H4></Link>
       <Link to={`/neptune`}> <H4>Neptune</H4></Link>
      </Nav>
      <HamBurger hamClicked={hamClicked}>
        <img onClick={handleHamClick} src= {nav} />
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
  transition: ease-in-out 250ms;
  @media only screen and (min-width: 768px){
    display: none;
  }
  opacity:${(props) =>
    props.hamClicked?0.2 : 1};
`

export default Header;
