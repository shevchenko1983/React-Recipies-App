import React from 'react';
import {FAVORITES} from "./config";

export interface SingleMealT {
    [key: string] : string | null
}

export interface ParseSingleMealDataT {
    mealTitle: string | null,
    mealImage: string | null,
    instructions: string | null,
    ingredients: Array<string | null>,
    categoryMeal: string | null,
}

export interface ContextT {
    parseSingleMealData: (singleMealData: SingleMealT) => ParseSingleMealDataT | null,
    onSendProductToFavorites: (product: SingleMealT) => boolean,
    onRemoveProductFromFavorites: (product: SingleMealT) => boolean,
    getProductFromLocalStorage?: (key: string) => string | null,
    getFavoritesMealsList: () => void,
    getMealsBySearch: (recipeName: string | null) => void,
    setMealsListByDefault: (prevState: SingleMealT[]) => void,
    getCategoryList: (categoryName: string | null) => void
}

//Parse data  SingleMeal
export const parseSingleMealData = (singleMealData: SingleMealT) => {
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
    }

    return {
        mealTitle,
        mealImage,
        instructions,
        ingredients,
        categoryMeal
    }
};

export const onSendProductToFavorites = (product: SingleMealT) => {
    if(!product) {
        return false;
    }
    //get all values from LocalStorage and put new product to these values, and push it back to LocalStorage
    setProductToLocalStorage(JSON.stringify([...getProductFromLocalStorage(FAVORITES), product]));
    return true;
};

export const onRemoveProductFromFavorites = (product: SingleMealT) => {
    if(!product) {
        return false;
    }
    //get all values from LocalStorage and remove current product from values, and push it back to LocalStorage
    const updatedArray = getProductFromLocalStorage(FAVORITES).filter((item: SingleMealT) => item.idMeal !== product.idMeal);
    setProductToLocalStorage(JSON.stringify([...updatedArray]));
    return true;
};

const setProductToLocalStorage = (value: string) => {
    if(!value) {
        return;
    }
    localStorage.setItem(FAVORITES, value);
}

export const getProductFromLocalStorage = (key: typeof FAVORITES) => {
    if(!key) {
        return null;
    }
    return JSON.parse(localStorage.getItem(key) as typeof FAVORITES) ?? [];
}

//Create AppContext for using via UseContext Hooks inside application
const initialValue = {} as ContextT;
export const AppContext = React.createContext<ContextT>(initialValue);
