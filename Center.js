import styled from "styled-components";

// StyledDiv component with styling for centering content
const StyledDiv = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;

`;

// Center component that wraps children inside the StyledDiv component=
export default function Center({children}) {
    return (
        <StyledDiv>{children}</StyledDiv>
    );
}