import styled from 'styled-components';
import {useEffect, useState} from "react";
import {searchMealsByName} from "../api/recipies-api";

const SearchWrapper = styled('input')`
    padding: 5px 15px;
    color: #3f3f3f;
    background-color: #ffc0cb82;
    width: 50%;
    margin: auto;
    border: none;
    border-radius: 5px;
    
    &:focus{
        outline:none;
        box-shadow: 0 5px 6px #c571b76b;
    }
`;

const SubmitInput = styled('input')`
    padding: 5px 15px;
    color: #3f3f3f;
    background-color: #fff;
    width: 100xp;
    margin: auto;
    border: none;
    border-radius: 5px;
    
    &:focus{
        outline:none;
        box-shadow: 0 5px 6px #c571b76b;
    }
`;

const SearchInput = () => {
    const [searchValue, setSearchValue] = useState("");
    const [recipeName, setRecipeName] = useState("");

    useEffect(() => {
        if(recipeName){
            searchMealsByName(recipeName)
            .then((meals) => console.log(meals));
        }
    },[recipeName]);

    //console.log(recipeName);

    return(
        <>
            <SearchWrapper type={"text"}
                           placeholder={"Search some recipie..."}
                           value={searchValue}
                           onChange={(e) => setSearchValue(e.target.value)}
            />
            <SubmitInput type={"submit"} value={"Search"} onClick={() => setRecipeName(searchValue)}/>
        </>
    );
};

export default SearchInput;