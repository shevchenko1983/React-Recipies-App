import styled from 'styled-components';
import {useContext, useEffect, useState} from "react";
import {searchMealsByName} from "../api/recipies-api";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {AppContext} from "../api/context";

const SearchWrapper = styled('input')`
    padding: 5px 15px;
    color: #3f3f3f;
    background-color: #ffc0cb82;
    width: 100%;
    max-width: 330px;
    margin: auto;
    border: none;
    border-radius: 5px;    
    overflow: hidden;
    
    
    &:focus{
        outline:none;
        box-shadow: 0 5px 6px #c571b76b;
    }
`;

const SubmitInput = styled('div')`   
    color: #3f3f3f;
    background-color: #fff;
    width: 50px;
    margin: auto;
    border: none;
    border-radius: 5px;
    height: 26px;
    display: inline-block;
    right: 0px;
    top: 0px;
    position: absolute;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    cursor: pointer;
    text-align: center;
    
    &:hover{
      background-color: #f4f2f2;
    }
    
    & svg{
        position: relative;
        top: 2px;
        color: #3f3f3f;
    }
    
    &:focus{
        outline:none;
        box-shadow: 0 5px 6px #c571b76b;
    }
`;

const SearchInput = () => {
    const [searchValue, setSearchValue] = useState("");
    const [recipeName, setRecipeName] = useState("");
    const context = useContext(AppContext);

    useEffect(() => {
        if(recipeName){
            searchMealsByName(recipeName)
            .then((meals) => context.setMealsListBySearch(meals));
        }
    },[recipeName]);

    console.log(recipeName);

    return(
        <div className={"search"} style={{
            display: "inline-block",
            width: "330px",
            maxWidth: "50%",
            position: "relative",
            textAlign: "left",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
            overflow: "hidden"
        }}>
            <SearchWrapper type={"text"}
                           placeholder={"Search some recipie..."}
                           value={searchValue}
                           onChange={(e) => setSearchValue(e.target.value)}
            />
            <SubmitInput>
                <FontAwesomeIcon icon={faSearch} onClick={() => setRecipeName(searchValue)}/>
            </SubmitInput>

        </div>
    );
};

export default SearchInput;