import Center from "@/components/Center";
import styled from "styled-components";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import CartIcon from "@/components/icons/CartIcon";
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";

// Styled background container
const Bg = styled.div`
  background-color: #222;
  color:#fff;
  padding: 50px 0;
`;

// Styled title
const Title = styled.h1`
  margin:0;
  font-weight:normal;
  font-size:1.5rem;
  @media screen and (min-width: 768px) {
    font-size:3rem;
  }
`;

// Styled description
const Desc = styled.p`
  color:#aaa;
  font-size:.8rem;
`;

// Styled columns wrapper using CSS grid
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img{
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img{
      max-width: 300%;
    }
  }
`;

// Styled column wrapper
const Column = styled.div`
  display: flex;
  align-items: center;
`;

// Styled buttons wrapper
const ButtonsWrapper = styled.div`
  display: flex;
  gap:10px;
  margin-top:25px;
`;

// Featured component
export default function Featured({product}) {
  const {addProduct} = useContext(CartContext);
  
    // Function to add the featured product to the cart
  function addFeaturedToCart() {
    addProduct(product._id);
  }
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Desc>{product.description}</Desc>
              <ButtonsWrapper>
                <ButtonLink href={'/product/'+product._id} outline={1} white={1}>Read more</ButtonLink>
                <Button white onClick={addFeaturedToCart}>
                  <CartIcon />
                  Add to cart
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
          <img src="https://soyamoy-next-ecommerce.s3.amazonaws.com/1684691157917.jpeg" alt=""/>
          </Column>
        </ColumnsWrapper>
      </Center>

    </Bg>
  );
}