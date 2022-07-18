import React, {useState} from "react";
import styled from "styled-components";
import { colors } from "../Shared/colors";
import { H1, H2, H3, H4, P } from "../Shared/typography";
import nav from "../assets/icon-hamburger.svg"
import { Link } from "react-router-dom";


const PhoneNav= ({}) => {

  return (
    <StyledPhoneNav>
        <Link className="Link" to={`/mercury`}>
            <H4>Mercury</H4>
        </Link>
        <Link className="Link" to={`/venus`}>
            <H4>Venus</H4>
        </Link>
        <Link className="Link" to={`/earth`}>
            <H4>Earth</H4>
        </Link>
        <Link className="Link" to={`/mars`}>
            <H4>Mars</H4>
        </Link>
        <Link className="Link" to={`/jupiter`}>
            <H4>Jupiter</H4>
        </Link>
        <Link className="Link" to={`/saturn`}>
            <H4>Saturn</H4>
        </Link>
        <Link className="Link" to={`/uranus`}>
            <H4>Uranus</H4>
        </Link>
        <Link className="Link" to={`/neptune`}> 
            <H4>Neptune</H4>
        </Link>
    </StyledPhoneNav>  
  );
};

const StyledPhoneNav = styled.nav`
    background-color: ${colors.dark};
    & > *:not(:last-child){
        border-bottom: 1px solid ${colors.lightGrey};
    }
`



export default PhoneNav;
