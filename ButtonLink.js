import Link from "next/link";
import styled from "styled-components";
import {ButtonStyle} from "@/components/Button";

// Styled Link component that extends the styles from ButtonStyle
const StyledLink = styled(Link)`
  ${ButtonStyle}
`;

// ButtonLink component that uses the StyledLink component
export default function ButtonLink(props) {
  return (
    <StyledLink {...props} />
  );
}