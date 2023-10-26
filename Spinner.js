import {BounceLoader} from "react-spinners";
import styled from "styled-components";

// Wrapper component
const Wrapper = styled.div`
  ${props => props.fullWidth ? `
    display:block;
    display:flex;
    justify-content:center;
  ` : `
    border: 5xp solid blue;
  `}
`;

// Spinner component
export default function Spinner({fullWidth}) {
  return (
    <Wrapper fullWidth={fullWidth}>
      <BounceLoader speedMultiplier={3} color={'#555'} />
    </Wrapper>
  );
}