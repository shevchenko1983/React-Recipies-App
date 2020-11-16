import styled from 'styled-components';
import ContentProductItem from "./ContentProductItem";


const ProductItemsWrapper = styled('div')`
    padding: 20px;
    display: flex;
    flex-flow: row wrap;
    
    & a{
        max-width: 45%;
        flex-basis: 50%;
        align-self: flex-end;
        margin: 10px;
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

const TopProductItemsWrapper = ({meals}) => {
    const mealsArr = [];
    meals.forEach((item) => mealsArr.push(...item.meals));
    return(
        <ProductItemsWrapper className={'content-products__item'}>
            {mealsArr.map((item, index) => {
                return <ContentProductItem product={item} key={index}/>
            })}
        </ProductItemsWrapper>
    );
};

export default TopProductItemsWrapper;