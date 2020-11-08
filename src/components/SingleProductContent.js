import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router";
import {getMealById} from "../api/recipies-api";
import styled from 'styled-components';

const SingleProductWrapper = styled('div')`
    & img{
        width: 100%;
        max-width: 70%;
        margin-bottom: 20px;
    }
`;

const SingleProductContent = () => {
    const [currMeal, setCurrMeal] = useState({});
    let mealId = useHistory().location.pathname.split("/")[2];

    // const getCurrentData = (currMeal) => {
    //
    //     let meal = Object.values(currMeal)[0];
    //     let {mealTitle = meal.strMeal,
    //         mealImage = meal.strMealThumb,
    //         instructions = meal.strInstructions,
    //
    //     } = meal;
    //     const ingredients = [];
    //     for(let elem in meal){
    //         if(elem.includes("strIngredient")){
    //             ingredients.push(elem);
    //         }
    //     }
    // };

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
            console.log("run")
            //getCurrentData(currMeal);
        }
    },[Object.entries(currMeal).length]);

    console.log(currMeal);
    return(
        <SingleProductWrapper>
            { Object.entries(currMeal).length > 0 &&
                <>
                    <h2>{currMeal[0].strMeal}</h2>
                    <img src={currMeal[0].strMealThumb} alt=""/>
                </>}
        </SingleProductWrapper>
    );
}

export default SingleProductContent;