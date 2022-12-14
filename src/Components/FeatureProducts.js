import React from "react";
import styled from "styled-components";
import { useProductContext } from "../ContextAPI";
import Product from "./Product";

const FeatureProducts = () => {
    const { isLoading, featuresProducts } = useProductContext();
    console.log(featuresProducts);
    if (isLoading) {
        return (
            <>
                <div className="container text-center">
                    <h3>......loading</h3>
                </div>
            </>
        );

    }

    return (
        <Wrapper className="section">
            <div className="container">
                <h3>Check Now</h3>
                <h2>Featured Products</h2>
                <div className="grid grid-column py-4">
                    {featuresProducts.map((ele) => {
                        return (
                            <Product
                                image={ele.image}
                                id={ele.id}
                                name={ele.name}
                                price={ele.price}
                                company={ele.company}
                            />
                        );
                    })}
                </div>
            </div>
        </Wrapper>
    );
};
export default FeatureProducts;
const Wrapper = styled.section`
padding:4rem 0; 
text-align: center;
margin-bottom: 4rem;
background-color: ${({ theme }) => theme.colors.bg};
.grid-column{
    grid-template-columns: repeat(3,1fr);
}
.container{
h3,h2{
    font-weight: 500;

}
h2{
    font-size: 3rem;
}
max-width: 120rem;
.grid{
    justify-items: center;
    
}
}
` ;         