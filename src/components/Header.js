import React, {useContext} from 'react';
import styled from 'styled-components';
import SearchInput from "./SearchInput";
import {RiUserStarFill} from 'react-icons/ri';
import {AppContext, getFavoritesMealsList} from "../api/context";
import {NavLink} from "react-router-dom";
import App from "../App";

const HeaderWrapper = styled('div')`
    padding: 10px 20px;
    border-bottom: 2px solid #cfa4bf;
    box-shadow: 0px 5px 7px #c571b76b;
    margin-bottom: 25px;
    
    & svg.favorite-icon{
        font-size: 25px;
        margin-left: 30px;
        cursor: pointer;
        
        &:hover{
            color: #f69400;
        }
    }
`;

const Header = () => {
    const context = useContext(AppContext);
    return(
        <HeaderWrapper className={"header"}>
            <SearchInput/>
            <NavLink to={{pathname: "/"}}>
               <RiUserStarFill className={"favorite-icon"}
                                onClick={() => context.getFavoritesMealsList()}
                />
            </NavLink>
        </HeaderWrapper>
    );
};

export default Header;

