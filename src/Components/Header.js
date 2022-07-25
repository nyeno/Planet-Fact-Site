import React, {useState , useEffect, useContext} from "react";
import styled from "styled-components";
import { colors } from "../Shared/colors";
import { H1, H2, H3, H4, P } from "../Shared/typography";
import nav from "../assets/icon-hamburger.svg"
import { Link } from "react-router-dom";
import PhoneNav from "./PhoneNav";
import { AppContext } from "../context/AppContext";

const Header = ({}) => {
  const [state, dispatch] = useContext(AppContext);
  const [hamClicked,setHamClicked]=useState(state.hamShow)
  useEffect(() => {
    setHamClicked(state.hamShow)
  }, [state])
  
  const handleHamClick =()=>{
    dispatch({
        type: "HAMBURGER_SHOW",
        payload:!state.hamShow
      });
  }

  useEffect(() => {
    if (hamClicked) {
      document.body.style.overflow = 'hidden'
    }
    else{
      document.body.style.overflow = 'scroll'
    }
  }, [hamClicked])

  return (
    <div>
      <StyledHeader>
        <Logo>
          <H2>The planets</H2>
        </Logo>
        <Nav>
          <Link className="Link" to={`/mercury`}><H4>Mercury</H4></Link>
          <Link className="Link" to={`/venus`}> <H4>Venus</H4></Link>
          <Link className="Link" to={`/earth`}><H4>Earth</H4></Link>
          <Link className="Link" to={`/mars`}><H4>Mars</H4></Link>
          <Link className="Link" to={`/jupiter`}> <H4>Jupiter</H4></Link>
          <Link className="Link" to={`/saturn`}><H4>Saturn</H4></Link>
          <Link className="Link" to={`/uranus`}><H4>Uranus</H4></Link>
          <Link className="Link" to={`/neptune`}> <H4>Neptune</H4></Link>
        </Nav>
        <HamBurger hamClicked={hamClicked}>
          <img onClick={handleHamClick} src= {nav} />
        </HamBurger>
    </StyledHeader>
    <>{ hamClicked &&
        <PhoneNav display={true}/>
      }
    </>
  </div>
    
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
  @media only screen and (min-width: 1024px){
    flex-direction: row;
    padding: 1em 1.5em;
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
  @media only screen and (min-width: 1024px){
    flex: 1;
    margin-top: 0.8em;
  }
`

const HamBurger = styled.section`
  margin: auto 0;
  transition: ease-in-out 250ms;
  @media only screen and (min-width: 768px){
    display: none;
  }
  opacity:${(props) =>
    props.hamClicked  ? 0.2 : 1};
`

export default Header;