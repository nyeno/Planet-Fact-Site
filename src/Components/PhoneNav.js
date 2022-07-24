/* eslint-disable */
import React, {useState} from "react";
import styled from "styled-components";
import { colors } from "../Shared/colors";
import { H1, H2, H3, H4, P } from "../Shared/typography";
import nav from "../assets/icon-hamburger.svg"
import { Link } from "react-router-dom";


const PhoneNav = ({display}) => {

  return (
        <Nav display={display}>
            <StyledLink className="Link" to={`/mercury`}><H4>Mercury</H4></StyledLink>
            <StyledLink className="Link" to={`/venus`}> <H4>Venus</H4></StyledLink>
            <StyledLink className="Link" to={`/earth`}><H4>Earth</H4></StyledLink>
            <StyledLink className="Link" to={`/mars`}><H4>Mars</H4></StyledLink>
            <StyledLink className="Link" to={`/jupiter`}> <H4>Jupiter</H4></StyledLink>
            <StyledLink className="Link" to={`/saturn`}><H4>Saturn</H4></StyledLink>
            <StyledLink className="Link" to={`/uranus`}><H4>Uranus</H4></StyledLink>
            <StyledLink className="Link last" to={`/neptune`}> <H4>Neptune</H4></StyledLink>
        </Nav>
  );
};

const Nav = styled.nav`
display: ${(props) =>
  props.display ? 'inline-block' : 'none'};
`
const StyledLink = styled(Link)`
   
`

export default PhoneNav;
