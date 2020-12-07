import React, {memo, useEffect, useState} from 'react';
import styled from 'styled-components';
import {getAllCategoriesMeals} from "../../api/recipies-api";
import TopProductItem from "./TopProductItem";

const ProductItemsWrapper = styled('div')`
    padding: 20px 0px;
    padding-bottom: 10px;
    // display: flex;
    // flex-flow: row nowrap;
    // justify-content: space-between;
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
    let meals = categoriesList.length > 0 ? Object.values(categoriesList)[0] : null;

    useEffect(() => {
        if(categoriesList.length === 0){
            //each time call API for getting All Meals Categories
            getAllCategoriesMeals().then((meal) => setCategoriesList([meal]));
        }
    },[categoriesList.length]);

    console.log(categoriesList);

    return(
        <ProductItemsWrapper className={'top-products__item'}>
            {categoriesList.length > 0 && meals.categories.map((item, index) => <TopProductItem key={index} product={item}/>)}
        </ProductItemsWrapper>
    );
};

export default memo(TopProductItemsWrapper);