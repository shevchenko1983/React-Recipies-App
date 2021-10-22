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

    //get ingredients List if they aren't empty
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
    const productsArr = [product];
    //get all values from LocalStorage
    if(getProductFromLocalStorage(FAVORITES)){
        productsArr.push(...getProductFromLocalStorage(FAVORITES));
    }
    //Put new product to these values, and push it back to LocalStorage
    sendProductToLocalStorage(JSON.stringify(productsArr));
    //return array of Favorites Products
    return productsArr;
};

const sendProductToLocalStorage = (product) => {
    localStorage.setItem(FAVORITES, product);
}

export const getProductFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}


//Create AppContext for using via UseContext Hooks inside application
export const AppContext = React.createContext({});
