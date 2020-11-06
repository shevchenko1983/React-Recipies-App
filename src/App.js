import './App.css';
import Header from "./components/Header";
import TopProductItemsWrapper from "./components/TopProductItemsWrapper";
import {AppContext} from "./api/context";
import React, {useEffect, useState} from "react";
import ContentProductItemsWrapper from "./components/ContentProductItemsWrapper";
import {getMealByRandom} from "./api/recipies-api";
import {BrowserRouter} from "react-router-dom";
import SingleProductContent from "./components/SingleProductContent";
import {SINGLE_RECIPIE_PATH} from "./api/config";
import {Route, withRouter} from "react-router";


function App() {
  const [mealsListBySearch, setMealsListBySearch] = useState([]);
  const [mealsListByDefault, setMealsListByDefault] = useState([]);

  useEffect(() => {
      //Fill list of Default meal if mealsListBySearch is empty
      if(mealsListByDefault.length < 5 && mealsListBySearch.length === 0){
          getMealByRandom().then((meal) => setMealsListByDefault([...mealsListByDefault, meal])) ;
      }
  },[mealsListByDefault, mealsListBySearch]);

  return (
    <div className="App">
        <AppContext.Provider value={{setMealsListBySearch, setMealsListByDefault}}>
            <Header/>
            {/*{If mealsListBySearch is empty -> showing mealsListByDefault}*/}
            <TopProductItemsWrapper meals={mealsListBySearch.length > 0 ? mealsListBySearch : mealsListByDefault}/>
            {/*//Show by default ContentProductItemsWrapper with a list of the products*/}
            <Route exact path="/" render={() => <ContentProductItemsWrapper meals={mealsListBySearch.length > 0 ? mealsListBySearch : mealsListByDefault}/>}/>
            <Route path={SINGLE_RECIPIE_PATH} component={SingleProductContent}/>
        </AppContext.Provider>
    </div>
  );
}

export default withRouter(App);
