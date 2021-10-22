import React, {memo, useEffect, useState} from 'react';
import styled from 'styled-components';
import {getAllCategoriesMeals} from "../../api/recipies-api";
import TopProductItem from "./TopProductItem";

const ProductItemsWrapper = styled('div')`
    padding: 20px 0px;
    padding-bottom: 10px;
    overflow-x: auto;
	white-space: nowrap;
	-ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    max-width: 90%;
    margin: auto;
	
	&::-webkit-scrollbar{
	   background: transparent;	  
	}		
`;

const TopProductItemsWrapper = () => {
    const [categoriesList, setCategoriesList] = useState([]);
    const meals = Object.values(categoriesList)[0];

    useEffect(() => {
        //each time call API for getting All Meals Categories
        getAllCategoriesMeals().then((meal) => setCategoriesList(meal));
    },[]);

    return(
        <ProductItemsWrapper className={'top-products__item'}>
            {meals && meals.map((item, index) => <TopProductItem key={index} product={item}/>)}
        </ProductItemsWrapper>
    );
};

export default memo(TopProductItemsWrapper);
