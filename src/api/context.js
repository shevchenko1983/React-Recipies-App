import React from 'react';
import {useHistory} from "react-router";

//Parse data  SingleMeal
export const parseSingleMealData = (singleMealData) => {
    let meal = Object.values(singleMealData)[0];
    let {mealTitle = meal.strMeal,
        mealImage = meal.strMealThumb,
        instructions = meal.strInstructions,
        categoryMeal = meal.strCategory,
    } = meal;

    //get ingredients List
    const ingredients = [];
    for(let elem in meal){
        if(elem.includes("strIngredient") && meal[elem]){
            ingredients.push(meal[elem]);
        }
    };

    return {
        mealTitle,
        mealImage,
        instructions,
        ingredients,
        categoryMeal
    }
};


export const onSendProductToFavorites = (product) => {

    console.log("Fovorites", product);
};

//Create AppContext for using via UseContext Hooks inside application
export const AppContext = React.createContext({});
