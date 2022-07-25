/* eslint-disable */
import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../Shared/colors";
import { H1, H2, H3, H4, P } from "../Shared/typography";
import nav from "../assets/icon-hamburger.svg";
import { Link } from "react-router-dom";

const PhoneNav = ({ display, ham }) => {
  const [showNav, setShowNav] = useState(true);

  return (
    <>
      {showNav && (
        <Nav display={display}>
          <StyledLink
            className="Link"
            to={`/mercury`}
            onClick={() => setShowNav(false)}
          >
            <img
              src="./assets/planet-mercury.svg"
              style={{ width: "1.2em", height: "1.2em" }}
            />
            <H4>Mercury</H4>
            <img src="./assets/icon-chevron.svg" style={{ height: "1em" }} />
          </StyledLink>
          <StyledLink
            className="Link"
            to={`/venus`}
            onClick={() => setShowNav(false)}
          >
            <img
              src="./assets/planet-venus.svg"
              style={{ width: "1.2em", height: "1.2em" }}
            />
            <H4>Venus</H4>
            <img src="./assets/icon-chevron.svg" style={{ height: "1em" }} />
          </StyledLink>
          <StyledLink
            className="Link"
            to={`/earth`}
            onClick={() => setShowNav(false)}
          >
            <img
              src="./assets/planet-earth.svg"
              style={{ width: "1.2em", height: "1.2em" }}
            />
            <H4>Earth</H4>
            <img src="./assets/icon-chevron.svg" style={{ height: "1em" }} />
          </StyledLink>
          <StyledLink
            className="Link"
            to={`/mars`}
            onClick={() => setShowNav(false)}
          >
            <img
              src="./assets/planet-mars.svg"
              style={{ width: "1.2em", height: "1.2em" }}
            />
            <H4>Mars</H4>
            <img src="./assets/icon-chevron.svg" style={{ height: "1em" }} />
          </StyledLink>
          <StyledLink
            className="Link"
            to={`/jupiter`}
            onClick={() => setShowNav(false)}
          >
            <img
              src="./assets/planet-jupiter.svg"
              style={{ width: "1.2em", height: "1.2em" }}
            />
            <H4>Jupiter</H4>
            <img src="./assets/icon-chevron.svg" style={{ height: "1em" }} />
          </StyledLink>
          <StyledLink
            className="Link"
            to={`/saturn`}
            onClick={() => setShowNav(false)}
          >
            <img
              src="./assets/planet-saturn.svg"
              style={{ width: "1.2em", height: "1.2em" }}
            />
            <H4>Saturn</H4>
            <img src="./assets/icon-chevron.svg" style={{ height: "1em" }} />
          </StyledLink>
          <StyledLink
            className="Link"
            to={`/uranus`}
            onClick={() => setShowNav(false)}
          >
            <img
              src="./assets/planet-uranus.svg"
              style={{ width: "1.2em", height: "1.2em" }}
            />
            <H4>Uranus</H4>
            <img src="./assets/icon-chevron.svg" style={{ height: "1em" }} />
          </StyledLink>
          <StyledLink
            className="Link last"
            to={`/neptune`}
            onClick={() => setShowNav(false)}
          >
            <img
              src="./assets/planet-neptune.svg"
              style={{ width: "1.2em", height: "1.2em" }}
            />
            <H4>Neptune</H4>
            <img src="./assets/icon-chevron.svg" style={{ height: "1em" }} />
          </StyledLink>
        </Nav>
      )}
    </>
  );
};

const Nav = styled.nav`
display: ${(props) => (props.display ? "inline-block" : "none")};
position: fixed;
padding: 2.75em 1.5em;
z-index: 2;
top:  3em
left: 0;
background-color: ${colors.dark};
width: 100vw;
height: 100vh;
overflow: hidden;
`;
const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 1.25em 0;
  border-bottom: 1px solid ${colors.darkGrey};
  & > H4 {
    width: 80%;
  }
`;

export default PhoneNav;
