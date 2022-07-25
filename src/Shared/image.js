import styled from "styled-components";
import { colors } from "./colors";

const Image = ({
  children,
  zIndex,
  display,
  src
}) => {
  return (
    <StyledImg
      display={display}
      zIndex={zIndex}
      src={src}
    >
      {children}
    </StyledImg>
  );
};

export const StyledImg = styled.img`
  display: ${(props) =>
    props.display ? 'inline-block' : 'none'};
  padding: 0.625em 1.25em;
  transition: ease-in-out 250ms;
  margin: 1em auto;
  justify-content:left;
  width: 80%;
  ${props => props.zIndex  && `
         position: absolute;
         top: 50%;
         left: calc(50% - 5em);
         z-index:1;
         width: 10em;
    `}
`;
export default Image;

