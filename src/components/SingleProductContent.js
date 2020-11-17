import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from "react-router";
import {getMealById} from "../api/recipies-api";
import styled from 'styled-components';
import {AppContext} from "../api/context";
import ContentText from "./ContentText";
import {NavLink} from "react-router-dom";
import {SINGLE_RECIPIE_PATH} from "../api/config";


const SingleProductWrapper = styled('div')`
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
            font-weight: 600;
        }
        & li{       
            text-align: left;
            text-transform: capitalize;
        }
    }
   
`;

const SingleProductContent = () => {
    const [currMeal, setCurrMeal] = useState({});
    const [parsedData, setParsedData] = useState({});
    let mealId = useHistory().location.pathname.split("/")[2];
    let context = useContext(AppContext);

    //Check if has mealId
    useEffect(() => {
        if(mealId){
            getMealById(mealId)
            .then((response) => setCurrMeal(response.meals));
        }

    }, [mealId]);

    //check if currMeal is not empty
    useEffect(() => {
        if(Object.entries(currMeal).length > 0){
            setParsedData(context.parseSingleMealData(currMeal));
        }
    },[Object.entries(currMeal).length]);

    //console.log(currMeal, parsedData);
    return(
        <SingleProductWrapper>
            { Object.entries(parsedData).length > 0 &&
                <>
                    <h2>{parsedData.mealTitle}</h2>
                    <div className="product_options">
                        <img src={parsedData.mealImage} alt=""/>
                        <NavLink className={"product_category"}
                                 onClick={() => context.getCategoryList(parsedData.categoryMeal)}
                                 to={{
                                     pathname: "/"
                                 }}
                        >
                            {parsedData.categoryMeal}
                        </NavLink>
                        <ol className="engridients">
                            <p>Engridients: </p>
                            {parsedData.ingredients.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })}
                        </ol>
                    </div>
                    <h3>How to do it?!...</h3>
                    <ContentText text={parsedData.instructions}/>
                </>}
        </SingleProductWrapper>
    );
}

export default SingleProductContent;