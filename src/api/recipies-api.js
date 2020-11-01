

export const searchMealsByName = async (searchValue) => {
    try{
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`);
        return await response.json();
    }catch (e) {
        console.error(e.message);
    }

}