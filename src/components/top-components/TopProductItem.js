import React, {useContext} from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {AppContext} from "../../api/context";


const Item = styled('div')`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    border:3px solid #ffc0cb82;
    background-size: 170%;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0px 4px 3px #c571b76b;
    margin: 0px 5px;
    position: relative;
    
    & p{
        position: absolute;
        top: -42px;
        left: 0;
        right: 0;
        text-decoration: none;
    }
`;

const TopProductItem = ({product}) => {
    const context = useContext(AppContext);
    let {id = product.idCategory,
         title = product.strCategory,
         image = product.strCategoryThumb,
         description = product.strCategoryDescription} = product;

    return(
        <NavLink to={{pathname: '/'}}>
            <Item className={"top-product__item"}
                  style={{backgroundImage: `url(${image})`}}
                  onClick={() => context.getCategoryList(title)}
            >
                <p>{title}</p>
            </Item>
        </NavLink>
    );
};

export default TopProductItem;
