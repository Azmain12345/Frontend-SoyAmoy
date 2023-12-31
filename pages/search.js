import Header from "@/components/Header"; 
import Center from "@/components/Center";
import Input from "@/components/Input";
import styled from "styled-components";
import {useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import ProductsGrid from "@/components/ProductsGrid";
import {debounce} from "lodash";


const SearchInput = styled(Input)`
    padding: 5px 10px;
    border-radius: 5px;
    margin: 30px 0 30px;
    font-size:1.4rem;
`;


export default function SearchPage() {
    const [phrase,setPhrase] = useState('');
    const [products,setProducts] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const debouncedSearch = useCallback(
        debounce(searchProducts, 500), []
    );
    useEffect(() => {
        if (phrase.length > 0) {
            debouncedSearch(phrase);
        } else {
            setProducts([]);
        }
    }, [phrase]);
 
    function searchProducts(phrase) {
        axios.get('/api/products?phrase='+encodeURIComponent(phrase))
        .then(response => {
            setProducts(response.data);
        });
    }
    return (
        <>
            <Header />
            <Center>
                <SearchInput
                    autoFocus
                    value={phrase}
                    onChange={ev => setPhrase(ev.target.value)}
                    placeholder="Search for products ....."/>
                {phrase !== '' && products.length === 0 && (
                    <h2>No products found for query "{phrase}" </h2>
                )}
                <ProductsGrid products={products} />
            </Center>
        </>
    );
}