import React, {useContext} from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {AppContext} from "../../api/context";
import Tooltip from "rc-tooltip/lib/Tooltip";


const Item = styled('div')`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    border:3px solid #ffc0cb82;
    background-size: 170%;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0px 4px 3px #c571b76b;
    margin: 0px 12px;
    position: relative;
    cursor: pointer;
    display: inline-block;
 
    
    & p{
        position: relative;
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
            <Tooltip placement="bottom"
                     trigger={['hover']}
                     mouseEnterDelay={0.3}
                     mouseLeaveDelay={0.2}
                     destroyTooltipOnHide={true}
                     overlay={<span>{description}</span>}
                     align={{
                         offset: [0, 20],
                     }}
                     overlayStyle={{
                         backgroundColor: "#ffc0cbe0",
                         color: "#000",
                         maxWidth: "40%",
                         margin: "auto",
                         padding: "10px",
                         borderRadius: "5px",
                         maxHeight: "100px",
                         overflow: "auto",
                         boxShadow: "0px 4px 3px #c571b76b"
                     }}
                     overlayClassName={"custom-tooltip"}
            >
                <Item className={"top-product__item"}
                      style={{backgroundImage: `url(${image})`}}
                      onClick={() => context.getCategoryList(title)}
                >
                    <p>{title}</p>
                </Item>
            </Tooltip>
        </NavLink>
    );
};

export default TopProductItem;
