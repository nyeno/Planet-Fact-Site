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

@media screen and (min-width:768px){
    flex-direction: column;
    justify-content: flex-start;
    padding: 1.1em 1em;
    text-align: left;
    align-items: flex-start;
}
;
`

export default Info;

