import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from "react-router";
import {getMealById} from "../api/recipies-api";
import styled from 'styled-components';
import {AppContext} from "../api/context";


const SingleProductWrapper = styled('div')`
    & img{
        width: 100%;
        max-width: 70%;
        margin-bottom: 20px;
    }
    & ol li{       
        text-align: left;
        text-transform: capitalize;
    }
`;

const SingleProductContent = () => {
    const [currMeal, setCurrMeal] = useState({});
    const [parsedData, setParsedData] = useState({});
    let mealId = useHistory().location.pathname.split("/")[2];
    let context = useContext(AppContext);

    //Check if has mealId
    useEffect(() => {
        if(mealId){
            getMealById(mealId)
            .then((response) => setCurrMeal(response.meals));
        }

    }, [mealId]);

    //check if currMeal is not empty
    useEffect(() => {
        if(Object.entries(currMeal).length > 0){
            setParsedData(context.parseSingleMealData(currMeal));
        }
    },[Object.entries(currMeal).length]);

    console.log(currMeal, parsedData);
    return(
        <SingleProductWrapper>
            { Object.entries(parsedData).length > 0 &&
                <>
                    <h2>{parsedData.mealTitle}</h2>
                    <img src={parsedData.mealImage} alt=""/>
                    <p>Engridients: </p>
                    <ol className="engridients">
                        {parsedData.ingredients.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ol>
                </>}
        </SingleProductWrapper>
    );
}

export default SingleProductContent;