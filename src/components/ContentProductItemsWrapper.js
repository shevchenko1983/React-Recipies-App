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
        max-width: 45%;
        flex-basis: 50%;
        align-self: flex-end;
        margin: 10px;
        color:#000;
        text-decoration: none;
    }  
    
    @media (max-width: 767px){
        flex-flow: column nowrap;
         & a{
            max-width: 100%;
            flex-basis: 100%;
            align-self: auto;
         }
    }
`;

const TopProductItemsWrapper = ({meals, showCategoryTitle, categoryTitle}) => {
    const mealsArr = [];
    meals.forEach((item) => mealsArr.push(...item.meals));
    let title =  showCategoryTitle ? categoryTitle + ":" : "Top Recipies: ";
    return(
        <ProductItemsWrapper>
            <h3>{title}</h3>
            <div className="content-products__item">
                {mealsArr.map((item, index) => {
                    return <ContentProductItem product={item} key={index}/>
                })}
            </div>
        </ProductItemsWrapper>
    );
};

export default TopProductItemsWrapper;