import {
    GET_ALL_CATEGORIES_MEALS_LIST,
    GET_CATEGORY_MEALS_LIST_BY_CATEGORY_NAME,
    GET_MEAL_BY_ID,
    GET_MEAL_BY_RANDOM,
    SEARCH_MEALS_BY_NAME
} from "./config";

//get Meal be searching
export const searchMealsByName = async (searchValue) => {
    try{
        const response = await fetch(SEARCH_MEALS_BY_NAME + searchValue);
        return await response.json();
    }catch (e) {
        console.error(e.message);
    }
}

//get Meal By Random
export const getMealByRandom = async () => {
    try{
        const response = await fetch(GET_MEAL_BY_RANDOM);
        return await response.json();
    }catch (e) {
        console.error(e.message);
    }
}

//get Meal By Id
export const getMealById = async (mealId) => {
    try{
        const response = await fetch(GET_MEAL_BY_ID + mealId);
        return await response.json();
    }catch (e) {
        console.error(e.message);
    }
}

//get Category Meals List By Category Name
export const getCategoryMealsListByCategoryName = async (categoryName) => {
    try{
        const response = await fetch(GET_CATEGORY_MEALS_LIST_BY_CATEGORY_NAME + categoryName);
        return await response.json();
    }catch (e) {
        console.error(e.message);
    }
}

//get ALL Categories Meals List
export const getAllCategoriesMeals = async () => {
    try{
        const response = await fetch(GET_ALL_CATEGORIES_MEALS_LIST);
        return await response.json();
    }catch (e) {
        console.error(e.message);
    }
}
