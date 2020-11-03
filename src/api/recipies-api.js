import {SEARCH_MEALS_BY_NAME} from "./config";


export const searchMealsByName = async (searchValue) => {
    try{
        let response = await fetch(SEARCH_MEALS_BY_NAME + searchValue);
        return await response.json();
    }catch (e) {
        console.error(e.message);
    }

}