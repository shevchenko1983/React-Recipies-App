import './App.css';
import Header from "./components/Header";
import TopProductItemsWrapper from "./components/TopProductItemsWrapper";
import {AppContext} from "./api/context";
import React, {useState} from "react";


function App() {
  const [meals, setMeals] = useState({});

  return (
    <div className="App">
        <AppContext.Provider value={{setMeals}}>
            <Header/>
            {meals && <TopProductItemsWrapper meals={meals}/>}
        </AppContext.Provider>
    </div>
  );
}

export default App;
