import React from 'react';
import styled from 'styled-components';

const ProductItemsWrapper = styled('div')`
    padding: 20px 30px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
`;

const TopProductItemsWrapper = ({meals}) => {
    console.log(meals);
    return(
        <ProductItemsWrapper className={'top-products__item'}>

        </ProductItemsWrapper>
    );
};

export default TopProductItemsWrapper;