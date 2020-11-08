import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import {SINGLE_RECIPIE_PATH} from "../api/config";

const ProductItem = styled('div')`
    width:100%;
    margin:auto;    
    
    & .content-product__item-image{
        max-width:330px;
        height: 200px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 10px;
        margin: auto;
    }
`;

const ContentProductItem = ({product}) => {
    const {image = product.strMealThumb,
           title = product.strMeal,
           id = product.idMeal,
    } = product;
    console.log(product);
    return(
      <NavLink to={{
          pathname: SINGLE_RECIPIE_PATH + id
      }}>
      <ProductItem className={"content-product__item"}>
          <h3>{title}</h3>
          <div className="content-product__item-image" style={{backgroundImage: `url(${image})`}}/>
      </ProductItem>
      </NavLink>
    );
};

export default ContentProductItem;