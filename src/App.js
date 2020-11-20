import './App.css';
import Header from "./components/Header";
import TopProductItemsWrapper from "./components/top-components/TopProductItemsWrapper";
import {AppContext} from "./api/context";
import React, {useEffect, useState} from "react";
import ContentProductItemsWrapper from "./components/ContentProductItemsWrapper";
import {
    getCategoryMealsListByCategoryName,
    getMealByRandom,
    searchMealsByName
} from "./api/recipies-api";
import SingleProductContent from "./components/SingleProductContent";
import {SINGLE_RECIPIE_PATH} from "./api/config";
import {Route, withRouter} from "react-router";


const parseSingleMealData = (singleMealData) => {
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



function App() {
  const [mealsListBySearch, setMealsListBySearch] = useState([]);
  const [mealsListByDefault, setMealsListByDefault] = useState([]);
  const [showCategoryProducts, setShowCategoryProducts] = useState({category: '', status: false});

  useEffect(() => {
      //Fill list of Default meal if mealsListBySearch is empty
      if(mealsListByDefault.length < 5 && mealsListBySearch.length === 0){
          getMealByRandom().then((meal) => setMealsListByDefault([...mealsListByDefault, meal])) ;
      }
  },[mealsListByDefault, mealsListBySearch]);


    //get MealsList By Search
    const getMealsBySearch = (recipeName) => {
        searchMealsByName(recipeName)
        .then((meals) => {
            setMealsListBySearch([meals]);
            setShowCategoryProducts({category: recipeName, status: true});
        });
    };


   //get Category MealsList
  const getCategoryList = (categoryName) => {
      getCategoryMealsListByCategoryName(categoryName)
      .then((meal) => {
          setMealsListBySearch([meal]);
          setShowCategoryProducts({category: categoryName, status: true});
      });
  };

  //console.log(mealsListBySearch, mealsListByDefault);

  return (
    <div className="App">
        <AppContext.Provider value={{getMealsBySearch,
                                     setMealsListByDefault,
                                     parseSingleMealData,
                                     getCategoryList
        }}>
            <Header/>
            {/*{Show meals by categories}*/}
            <TopProductItemsWrapper />
            {/*//Show by default ContentProductItemsWrapper with a list of the products*/}
            <Route exact path="/" render={() => <ContentProductItemsWrapper
                                                meals={mealsListBySearch.length > 0 ? mealsListBySearch : mealsListByDefault}
                                                showCategoryTitle={showCategoryProducts.status}
                                                categoryTitle={showCategoryProducts.category}
            />}/>
            <Route path={SINGLE_RECIPIE_PATH} component={SingleProductContent}/>
        </AppContext.Provider>
    </div>
  );
}

export default withRouter(App);
