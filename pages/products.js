import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import {mongooseConnect} from "@/lib/mongoose";
import ProductsGrid from "@/components/ProductsGrid";
import {Product} from "@/models/Product";
import Title from "@/components/Title";


export default function ProductsPage({products}) {
  return (
    <>
      <Header />
      <Center>
        <Title>All products</Title>
        <ProductsGrid products={products} />
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();

    // Fetches all products from the database, sorting them by _id in descending order
  const products = await Product.find({}, null, {sort:{'_id':-1}});

    // Returns the fetched products as props for the ProductsPage component
  return {
    props:{
      products: JSON.parse(JSON.stringify(products)),
    }
  };
}