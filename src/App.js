import './App.css';
import Header from "./components/Header";
import TopProductItemsWrapper from "./components/top-components/TopProductItemsWrapper";
import {
    AppContext,
    getProductFromLocalStorage,
    onSendProductToFavorites,
    onRemoveProductFromFavorites,
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
import {FAVORITES, RECIPIE_CATEGORY_PATH, SINGLE_RECIPIE_PATH} from "./api/config";
import {Route, Switch, useHistory, withRouter, matchPath} from "react-router-dom";

function App() {
  const [mealsListBySearch, setMealsListBySearch] = useState([]);
  const [mealsListByDefault, setMealsListByDefault] = useState([]);
  const [showCategoryProducts, setShowCategoryProducts] = useState({category: '', status: false});
  const { location } = useHistory();
  //Check if current pathname is matched or with '/category', or '/recipie/'
  const matchedRoute = matchPath(location.pathname, [RECIPIE_CATEGORY_PATH]);
  const { path } = matchedRoute ?? {};

  useEffect(() => {
      //Fill list of Default meal if mealsListBySearch is empty
      if(mealsListByDefault.length < 5 && !mealsListBySearch.length){
          getMealByRandom().then((meal) => setMealsListByDefault([...mealsListByDefault, meal])) ;
      }
  },[mealsListByDefault, mealsListBySearch]);

  useEffect(() => {
      if(!path) {
          return;
      }
      if(path === RECIPIE_CATEGORY_PATH) {
          const categoryName = location.pathname.split('/').slice(-1);
          getCategoryList(...categoryName);
      }
  }, [path]);

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

  return (
    <div className="App">
        <AppContext.Provider
            value={{
                getMealsBySearch,
                getFavoritesMealsList,
                setMealsListByDefault,
                parseSingleMealData,
                getCategoryList,
                onSendProductToFavorites,
                onRemoveProductFromFavorites,
            }}
        >
            <Header/>
            {/*{Show meals by categories}*/}
            <TopProductItemsWrapper />
            <Switch>
                {/*//Show by default ContentProductItemsWrapper with a list of the products*/}
                <Route exact path="/" render={() => <ContentProductItemsWrapper
                                                    meals={mealsListBySearch}
                                                    defaultMeals={mealsListByDefault}
                                                    showCategoryTitle={showCategoryProducts.status}
                                                    categoryTitle={showCategoryProducts.category}
                />}/>
                <Route exact path={`${RECIPIE_CATEGORY_PATH}:name`} render={() => <ContentProductItemsWrapper
                                                                    meals={mealsListBySearch}
                                                                    defaultMeals={mealsListByDefault}
                                                                    showCategoryTitle={showCategoryProducts.status}
                                                                    categoryTitle={showCategoryProducts.category}
                />}/>
                <Route exact path={`${SINGLE_RECIPIE_PATH}:id`} component={SingleProductContent}/>
            </Switch>
        </AppContext.Provider>
    </div>
  );
}

export default withRouter(App);
