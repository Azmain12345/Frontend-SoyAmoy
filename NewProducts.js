import styled from "styled-components";
import Center from "./Center";
import ProductsGrid from "./ProductsGrid";

// Styled title component
const Title = styled.h2`
    font-size: 2rem;
    margin:30px 0 20px; 
    font-weight: normal;
`;

// NewProducts component
export default function NewProducts({products}) {
    return (
        <Center>
            <Title>New To The Menu</Title>
            <ProductsGrid products={products} />
        </Center>
        
    );
}