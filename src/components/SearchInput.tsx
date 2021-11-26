import React from 'react';
import styled from 'styled-components';
import {useContext, useEffect, useState} from "react";
import {BiSearchAlt2} from 'react-icons/bi';
import {AppContext} from "../api/context";
import {NavLink} from "react-router-dom";

const SearchWrapper = styled('div')`
     display: inline-block;
     width: 330px;
     maxWidth: 50%;
     position: relative;
     text-align: left;
     border-top-right-radius: 5px;
     border-bottom-right-radius: 5px;
     overflow: hidden;
     
     @media (max-width: 660px){
        max-width: 80%;
     }
`;

const SearchInputWrapper = styled('input')`
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
        top: 4px;
        color: #3f3f3fa1;
        width: 50px;
        height: 20px;
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
        if(!recipeName){
            return;
        }
        context.getMealsBySearch(recipeName);
    },[recipeName, context]);

    return(
        <SearchWrapper className={"search"}>
            <SearchInputWrapper
                type={"text"}
                placeholder={"Search some recipie..."}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <SubmitInput>
                <NavLink to={{pathname: "/"}}>
                    <BiSearchAlt2 onClick={() => setRecipeName(searchValue)}/>
                </NavLink>
            </SubmitInput>
        </SearchWrapper>
    );
};

export default SearchInput;