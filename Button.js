import styled, {css} from "styled-components";

// CSS styles for the button
export const ButtonStyle = css`
  border:0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center flex;
  text-decoration: none;
  font-weight: bold;
  svg{
      height: 16px;
      margin-right: 5px;
  }
  /* Conditionally apply styles based on props */
  ${props => props.block && css`
    display: block;
    width: 100%
  `}
  ${props => props.white && !props.outline && css`
  background-color: #fff;
  color: #000;
  `}
  ${props => props.white && props.outline && css`
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  `}
  ${props => props.black && !props.outline && css`
  background-color: #fff;
  color: #000;
  `}
  ${props => props.black && props.outline && css`
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  `}
  ${props => props.primary && !props.outline && css`
    background-color: #555;
    border: 1px solid #555;
    color:#fff;

  `}
  ${props => props.primary && props.outline && css`
  background-color: transparent;
  border: 1px solid #555;
  color:#555;

`}
  ${props => props.size === 'l' && css`
      font-size:1.2rem;
      padding: 10px 20px;
      svg{
          height: 20px;
        }
  `}
`;

// Styled button component
const StyledButton = styled.button`
  ${ButtonStyle}
`;

// Button component that uses the StyledButton component
export default function Button({children, ...rest}) {
    return (
        <StyledButton {...rest}>{children}</StyledButton>
    );
}