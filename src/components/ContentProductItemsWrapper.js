import React from 'react';
import styled from 'styled-components';
import ContentProductItem from "./ContentProductItem";

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

const ContentProductItemsWrapper = ({meals, showCategoryTitle, categoryTitle}) => {

    const mealsArr = Object.values(meals?.[0] ?? meals).flat();
    const title =  showCategoryTitle ? `${categoryTitle}: ` : "Top Recipies: ";

    return(
        <ProductItemsWrapper>
            <h3>{mealsArr ? title : "No Results..."}</h3>
            <div className="content-products__item">
                {mealsArr?.map((item, index) => {
                    return <ContentProductItem product={item} key={index}/>
                }) ?? null}
            </div>
        </ProductItemsWrapper>
    );
};

export default ContentProductItemsWrapper;