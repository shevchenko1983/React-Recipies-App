import './App.css';
import Header from "./components/Header";
import TopProductItemsWrapper from "./components/top-components/TopProductItemsWrapper";
import {
    AppContext,
    getProductFromLocalStorage,
    onSendProductToFavorites,
    parseSingleMealData
} from "./api/context";
import React, {useEffect, useState} from "react";
import ContentProductItemsWrapper from "./components/ContentProductItemsWrapper";
import {
    getCategoryMealsListByCategoryName,
    getMealByRandom,
    searchMealsByName
} from "./api/recipies-api";
import SingleProductContent from "./components/SingleProductContent";
import {FAVORITES, SINGLE_RECIPIE_PATH} from "./api/config";
import {Route, withRouter} from "react-router";



function App() {
  const [mealsListBySearch, setMealsListBySearch] = useState([]);
  const [mealsListByDefault, setMealsListByDefault] = useState([]);
  const [showCategoryProducts, setShowCategoryProducts] = useState({category: '', status: false});

  useEffect(() => {
      //Fill list of Default meal if mealsListBySearch is empty
      if(mealsListByDefault.length < 5 && !mealsListBySearch.length){
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

    //get Favorites Meals
   const getFavoritesMealsList = () => {
       setMealsListBySearch([...getProductFromLocalStorage(FAVORITES)]);
       setShowCategoryProducts({category: "Favorites Meals", status: true});
   }
    //console.log(mealsListBySearch, mealsListByDefault);

  return (
    <div className="App">
        <AppContext.Provider
            value={{getMealsBySearch,
                    getFavoritesMealsList,
                    setMealsListByDefault,
                    parseSingleMealData,
                    getCategoryList,
                    onSendProductToFavorites,
            }}
        >
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
