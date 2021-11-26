import './App.css';
import Header from "./components/Header";
import TopProductItemsWrapper from "./components/top-components/TopProductItemsWrapper";
import {
    AppContext,
    getProductFromLocalStorage,
    onSendProductToFavorites,
    onRemoveProductFromFavorites,
    parseSingleMealData,
} from "./api/context";
import { SingleMealT } from './api/context';
import React, {useEffect, useState} from "react";
import ContentProductItemsWrapper from "./components/ContentProductItemsWrapper";
import {
    getCategoryMealsListByCategoryName,
    getMealByRandom,
    searchMealsByName
} from "./api/recipies-api";
import SingleProductContent from "./components/SingleProductContent";
import {FAVORITES, RECIPIE_CATEGORY_PATH, SINGLE_RECIPIE_PATH, RECIPIE_FAVOURITE_PATH} from "./api/config";
import {Route, Switch, useHistory, withRouter, matchPath} from "react-router-dom";

type CategoryProductT = {
    category?: string,
    status: boolean
}

function App() {
  const [mealsListBySearch, setMealsListBySearch] = useState<Array<SingleMealT>>([]);
  const [mealsListByDefault, setMealsListByDefault] = useState<Array<SingleMealT>>([]);
  const [showCategoryProducts, setShowCategoryProducts] = useState<CategoryProductT>({category: '', status: false});
  const { location } = useHistory();
  //Check if current pathname is matched or with '/category', or '/recipie/'
  const matchedRoute = matchPath(location.pathname, [RECIPIE_CATEGORY_PATH, RECIPIE_FAVOURITE_PATH]);
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
          if(!categoryName){
              return;
          }
          const [category] = categoryName;
          getCategoryList(category);
      }
      if(path === RECIPIE_FAVOURITE_PATH) {
          getFavoritesMealsList();
      }
  }, [path, location.pathname]);

  //get MealsList By Search
    const getMealsBySearch = (recipeName: string | null) => {
        if(!recipeName) {
            return;
        }
        searchMealsByName(recipeName)
        .then((meals) => {
            setMealsListBySearch([meals]);
            setShowCategoryProducts({category: recipeName, status: true});
        });
    };

   //get Category MealsList
  const getCategoryList = (categoryName: string | null) => {
      if(!categoryName) {
          return;
      }
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
                                                    meals={mealsListBySearch.length > 0 ? mealsListBySearch : mealsListByDefault}
                                                    showCategoryTitle={showCategoryProducts.status}
                                                    categoryTitle={showCategoryProducts.category}
                />}/>
                <Route exact path={`${RECIPIE_CATEGORY_PATH}:name`} render={() => <ContentProductItemsWrapper
                                                                    meals={mealsListBySearch}
                                                                    showCategoryTitle={showCategoryProducts.status}
                                                                    categoryTitle={showCategoryProducts.category}
                />}/>
                <Route exact path={RECIPIE_FAVOURITE_PATH}  render={() => <ContentProductItemsWrapper
                                                            meals={mealsListBySearch}
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
