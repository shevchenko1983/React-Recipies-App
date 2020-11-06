import React from 'react';
import {useHistory} from "react-router";

const SingleProductContent = () => {
    let mealId = useHistory().location.pathname.split("/")[2];
    return(
        <h2>Single Product Content of {mealId}</h2>
    );
}

export default SingleProductContent;