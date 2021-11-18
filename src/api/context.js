import React from 'react';
import {FAVORITES} from "./config";

//Parse data  SingleMeal
export const parseSingleMealData = (singleMealData) => {
    if(!singleMealData) {
        return null;
    }

    let {mealTitle = singleMealData.strMeal,
        mealImage = singleMealData.strMealThumb,
        instructions = singleMealData.strInstructions,
        categoryMeal = singleMealData.strCategory,
    } = singleMealData;

    //get ingredients List if they aren't empty
    const ingredients = [];
    for(let elem in singleMealData){
        if(elem.includes("strIngredient") && singleMealData[elem]){
            ingredients.push(singleMealData[elem]);
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
    if(!product) {
        return null;
    }
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
    if(!product) {
        return;
    }
    localStorage.setItem(FAVORITES, product);
}

export const getProductFromLocalStorage = (key) => {
    if(!key) {
        return null;
    }

    return JSON.parse(localStorage.getItem(key));
}

//Create AppContext for using via UseContext Hooks inside application
export const AppContext = React.createContext({});
