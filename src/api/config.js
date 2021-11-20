const BASE_API_URL = 'https://www.themealdb.com/api/json/v1/1';

export const SEARCH_MEALS_BY_NAME = `${BASE_API_URL}/search.php?s=`;
export const GET_MEAL_BY_RANDOM = `${BASE_API_URL}/random.php`;
export const GET_MEAL_BY_ID = `${BASE_API_URL}/lookup.php?i=`;
export const GET_CATEGORY_MEALS_LIST_BY_CATEGORY_NAME = `${BASE_API_URL}/filter.php?c=`;
export const GET_ALL_CATEGORIES_MEALS_LIST = `${BASE_API_URL}/categories.php`;

//Base URL
export const PRODUCTION_URL = 'https://shevchenko1983.github.io/React-Recipies-App';

//App Routing
export const SINGLE_RECIPIE_PATH = '/recipie/';
export const RECIPIE_CATEGORY_PATH = "/category/";

//Keys in LocalStorage
export const FAVORITES = 'favoriteMeals';
