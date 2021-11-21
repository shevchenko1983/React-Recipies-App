import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from "react-router";
import {getMealById} from "../api/recipies-api";
import styled from 'styled-components';
import {AppContext, getProductFromLocalStorage} from "../api/context";
import ContentText from "./ContentText";
import {NavLink} from "react-router-dom";
import {GiHeartWings} from "react-icons/gi";
import Loader from './shared-components/Loader';
import {AiOutlineHeart} from "react-icons/ai";
import {FAVORITES} from "../api/config";

const SingleProductWrapper = styled('div')`
    
    & svg {
      transform: translateY(250px);
    }
    
    & .product_options{
        padding: 0px 15px;
        display: flex; 
        position: relative;    
        
        & .product_category{
            position: absolute;
            background-color: antiquewhite;
            padding: 5px 10px;
            top: 10px;
            border-top-right-radius: 2px;
            border-bottom-right-radius: 2px;
            cursor: pointer;
            
            &:hover{
                color: #cdc0ff;
            }
        }
        
        & .product-item__image-panel{
                position: absolute;
                background-color: #f8e3f0e3;
                left: 0;              
                margin: auto;
                bottom: 20px;
                width: 100%;
                max-width: 50%;
                padding: 5px 0px;
                text-align: right;
                border-bottom-left-radius: 5px;
                border-bottom-right-radius: 5px;            
                 
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
    }
    
    & img{
        width: 100%;
        max-width: 50%;
        margin-bottom: 20px;
        border-radius: 5px;
    }
    
    & ol{
        margin: 0;
        & p{
            margin: 0;
            text-align: initial;
            font-weight: 600;
        }
        & li{       
            text-align: left;
            text-transform: capitalize;
        }
    }
   
   @media (max-width: 767px){
      .product_options{
         flex-direction: column;
         
         & img{
            max-width: 100%;
         }
         
         & .product-item__image-panel{
            position: relative;
            max-width: 100%;
            bottom: 50px;
         }
      }
   }
`;

const SingleProductContent = () => {
    const [currMeal, setCurrMeal] = useState([]);
    const [parsedData, setParsedData] = useState({});
    const [isFavoriteMeal, setIsFavoriteMeal] = useState(false);
    const { location } = useHistory();
    const mealId = location.pathname.split("/")[2];
    const context = useContext(AppContext);

    //Check if has mealId
    useEffect(() => {
        if(!mealId){
            return;
        }
        getMealById(mealId).then((response) => setCurrMeal(response.meals));
    }, [mealId]);

    //check if currMeal is not empty
    useEffect(() => {
        if(!currMeal.length){
            return;
        }
        setParsedData(context.parseSingleMealData(currMeal[0]));
    },[currMeal.length]);

    //check if favorite Meal is unique
    useEffect(() => {
        if(getProductFromLocalStorage(FAVORITES)?.some((item) => item.idMeal === mealId)){
            return setIsFavoriteMeal(true);
        }
        return setIsFavoriteMeal(false);
    },[mealId]);

    if(!parsedData) {
        return <div/>
    }

    const {
        mealTitle,
        mealImage,
        instructions,
        ingredients,
        categoryMeal
    } = parsedData;

    return(
        <SingleProductWrapper>
            {!mealImage ? <Loader/>
                :
                <>
                    <h2>{mealTitle}</h2>
                    <div className="product_options">
                        <img src={mealImage} alt=""/>
                        <div className="product-item__image-panel">
                            {isFavoriteMeal ?
                                <GiHeartWings
                                    onClick={() => setIsFavoriteMeal(!context.onRemoveProductFromFavorites(...currMeal))}
                                />
                                :
                                <AiOutlineHeart
                                    onClick={() => setIsFavoriteMeal(context.onSendProductToFavorites(...currMeal))}
                                />
                            }
                        </div>
                        <NavLink className={"product_category"}
                                 onClick={() => context.getCategoryList(categoryMeal)}
                                 to={{
                                     pathname: "/"
                                 }}
                        >
                            {categoryMeal}
                        </NavLink>
                        <ol className="engridients">
                            <p>Ingredients: </p>
                            {ingredients?.map((item, index) => {
                                return <li key={index}>{item}</li>
                            }) ?? null}
                        </ol>
                    </div>
                    <h3>How to do it?!...</h3>
                    <ContentText text={instructions}/>
                </>
            }
        </SingleProductWrapper>
    );
}

export default SingleProductContent;
