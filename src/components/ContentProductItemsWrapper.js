import styled from 'styled-components';
import ContentProductItem from "./ContentProductItem";


const ProductItemsWrapper = styled('div')`
    padding: 20px;
    display: flex;
    flex-flow: column nowrap;    
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