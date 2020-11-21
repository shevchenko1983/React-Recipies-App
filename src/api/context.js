import React from 'react';
import {FAVORITES} from "./config";


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
    let id = product.idMeal;
    const productsIdsArr = [];
    //add to array productId
    productsIdsArr.push(id);
    //get all values from LocalStorage
    if(getProductFromLocalStorage(FAVORITES) !== null){
        productsIdsArr.push(...getProductFromLocalStorage(FAVORITES).split(","));
    }
    //Put new productId to these values, and push it back to LocalStorage
    sendProductToLocalStorage(productsIdsArr.join(","));
    //return array of Favorites Products Ids
    //console.log(productsIdsArr);
    return productsIdsArr;
};

const sendProductToLocalStorage = (productId) => {
    localStorage.setItem(FAVORITES, productId);
}

const getProductFromLocalStorage = (key) => {
    return localStorage.getItem(key);
}


//Create AppContext for using via UseContext Hooks inside application
export const AppContext = React.createContext({});
