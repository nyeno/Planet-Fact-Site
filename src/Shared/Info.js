import styled from "styled-components";
import { colors } from "./colors";

const Button = ({
  children  
}) => {
  return (
    <Info>
      {children}
    </Info>
  );
};

export const Info = styled.div`
border: 1px solid ${colors['darkGrey']};
padding: 0.625em 1.5em;
display:flex;
justify-content: space-between;
align-items: center;

@media only screen and (min-width:768px){
    flex-direction: column;
    justify-content:left;
    padding: 0.625em 1.25em;
}
;
`

export default Info;

