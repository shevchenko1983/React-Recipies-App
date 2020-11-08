import {GET_MEAL_BY_ID, GET_MEAL_BY_RANDOM, SEARCH_MEALS_BY_NAME} from "./config";

//get Meal be searching
export const searchMealsByName = async (searchValue) => {
    try{
        let response = await fetch(SEARCH_MEALS_BY_NAME + searchValue);
        return await response.json();
    }catch (e) {
        console.error(e.message);
    }
}

//get Meal By Random
export const getMealByRandom = async () => {
    try{
        let response = await fetch(GET_MEAL_BY_RANDOM);
        return await response.json();
    }catch (e) {
        console.error(e.message);
    }
}

//get Meal By Id
export const getMealById = async (mealId) => {
    try{
        let response = await fetch(GET_MEAL_BY_ID + mealId);
        return await response.json();
    }catch (e) {
        console.error(e.message);
    }
}