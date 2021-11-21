import React from 'react';
import styled from 'styled-components';
import ContentProductItem from "./ContentProductItem";
import Loader from "./shared-components/Loader";

const ProductItemsWrapper = styled('div')`
    padding: 20px;
    
    & h3{
       text-transform: capitalize;    
    }  
    
    & .content-products__item{
       display: flex;
       flex-flow: row wrap;
    }   
    
    & a{       
       color:#000;
       text-decoration: none;        
    }  
    
    @media (max-width: 767px){
       flex-flow: column nowrap;       
    }
`;

const ContentProductItemsWrapper = ({meals, defaultMeals, showCategoryTitle, categoryTitle}) => {

    if(!meals || !Object.values(meals?.[0] ?? [])?.[0]) {
        return <h3>No Results...</h3>
    }

    if(!defaultMeals || !Object.values(defaultMeals?.[0] ?? [])?.[0]) {
        return <div style={{transform: `translateY(250px)`}}><Loader/></div>
    }

    const mealsArr = [...meals, ...defaultMeals].map((item) => {
       return item.meals ? item.meals : item
    });

    const title =  showCategoryTitle ? `${categoryTitle}: ` : "Top Recipies: ";

    return(
        <ProductItemsWrapper>
            <h3>{title}</h3>
            <div className="content-products__item">
                {mealsArr.flat().map((item, index) => {
                    return <ContentProductItem product={item} key={index}/>
                }) ?? null}
            </div>
        </ProductItemsWrapper>
    );
};

export default ContentProductItemsWrapper;