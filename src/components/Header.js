import React from 'react';
import styled from 'styled-components';
import SearchInput from "./SearchInput";
import {RiUserStarFill} from 'react-icons/ri';

const HeaderWrapper = styled('div')`
    padding: 10px 20px;
    border-bottom: 2px solid #cfa4bf;
    box-shadow: 0px 5px 7px #c571b76b;
    margin-bottom: 25px;
    
    & svg.favorite-icon{
        font-size: 25px;
        margin-left: 30px;
        cursor: pointer;
    }
`;

const Header = () => {

    return(
        <HeaderWrapper className={"header"}>
            <SearchInput/>
            <RiUserStarFill className={"favorite-icon"}/>
        </HeaderWrapper>
    );
};

export default Header;

