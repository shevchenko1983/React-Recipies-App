import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import {AiOutlineHeart} from 'react-icons/ai';
import {GiHeartWings} from 'react-icons/gi';
import {NavLink} from "react-router-dom";
import {FAVORITES, SINGLE_RECIPIE_PATH} from "../api/config";
import {AppContext, getProductFromLocalStorage, SingleMealT} from "../api/context";

type ProductT = {
    product: SingleMealT
}

const ProductItem = styled('div')`  
    max-width: 45%;
    flex-basis: 50%;
    align-self: flex-end;
    margin: 10px;
    color:#000;
    text-decoration: none;
    position: relative;    
    
    & .image-holder{
        overflow: hidden;
        border-radius: 10px;
        max-width: 330px;
        margin: auto;
    }
    
    & .content-product__item-image{
        max-width:330px;
        height: 200px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 10px;
        margin: auto;
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        box-shadow: 0px 5px 7px #c571b76b;
        position: relative;
        
        &:hover{
            transform: scale(1.1);
            transition: all 0.5s ease-in-out;
        }      
    }
    
    & .product-item__image-panel{
        position: absolute;
        background-color: #f8e3f0e3;
        max-width: 330px;
        left: 0;
        right: 0;
        margin: auto;
        bottom: 0;
        width: 100%;
        padding: 5px 0px;
        text-align: right;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;            
             
          & svg{              
            padding-right: 15px;
            color: #f17979;
            cursor: pointer;
            font-size: 18px;
                
            &:hover{
              transform: scale(1.3);
              transition: all 0.5s ease-in-out;
            }
         }
    }
    
     @media (max-width: 767px){
        max-width: 330px;
        margin: auto;
        flex-basis: 100%;
        align-self: auto;       
    }
`;

const ContentProductItem = ({product}: ProductT) => {
    const context = useContext(AppContext);
    const [isFavorite, setIsFavoriteMeal] = useState<boolean>(false);

    useEffect(() => {
        if(getProductFromLocalStorage(FAVORITES)?.some((item: SingleMealT) => item.idMeal === product?.idMeal)){
            return setIsFavoriteMeal(true);
        }
        return setIsFavoriteMeal(false);
    }, [product]);

    if(!product) {
        return <div/>
    }

    const onRemoveFavoriteMeal = () => {
        context.onRemoveProductFromFavorites(product);
        context.getFavoritesMealsList();
        setIsFavoriteMeal(false);
    }

    const onAddFavoriteMeal = () => {
        context.onSendProductToFavorites(product);
        setIsFavoriteMeal(true);
    }

    const {
        image = product.strMealThumb,
        title = product.strMeal,
        id = product.idMeal,
    } = product;

    return(
          <ProductItem className="content-product__item">
              <NavLink to={{
                  pathname: SINGLE_RECIPIE_PATH + id
              }}>
                  <h3>{title}</h3>
                  <div className="image-holder">
                      <div className="content-product__item-image" style={{backgroundImage: `url(${image})`}}/>
                  </div>
              </NavLink>
              <div className="product-item__image-panel">
                  {isFavorite ?
                      <GiHeartWings
                          data-testid="favorite-icon"
                          onClick={onRemoveFavoriteMeal}
                      />
                      :
                      <AiOutlineHeart
                          data-testid="not-favorite-icon"
                          onClick={onAddFavoriteMeal}
                      />
                  }
              </div>
          </ProductItem>
    );
};

export default ContentProductItem;