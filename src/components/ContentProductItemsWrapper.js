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
        // overflow: hidden;
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

    const mealsArr = [];
    meals.forEach((item) => item.meals && mealsArr.push(...item.meals));
    let title =  showCategoryTitle ? categoryTitle + ":" : "Top Recipies: ";
    return(

        <ProductItemsWrapper>
            <h3>{mealsArr.length > 0 ? title : "No Results..."}</h3>
            <div className="content-products__item">
                {mealsArr.map((item, index) => {
                    return <ContentProductItem product={item} key={index}/>
                })}
            </div>
        </ProductItemsWrapper>
    );
};

export default ContentProductItemsWrapper;