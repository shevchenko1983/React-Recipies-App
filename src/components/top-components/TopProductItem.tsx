import React, {useContext} from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {AppContext, SingleMealT} from "../../api/context";
import Tooltip from "rc-tooltip/lib/Tooltip";
import {RECIPIE_CATEGORY_PATH} from "../../api/config";

type ProductItemT = {
    product: SingleMealT
}

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
    & a{
        color: #000;
        text-decoration: none;
    }
`;

const TopProductItem = ({product}: ProductItemT) => {
    const context = useContext(AppContext);

    if(!product){
        return <div/>
    }

    const {
         title = product.strCategory,
         image = product.strCategoryThumb,
         description = product.strCategoryDescription
    } = product;

    return(
        <NavLink to={{pathname: RECIPIE_CATEGORY_PATH + title}} onClick={() => context.getCategoryList(title)}>
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
                     overlayClassName="custom-tooltip"
            >
                <Item className="top-product__item"
                      style={{backgroundImage: `url(${image})`}}
                >
                    <p>{title}</p>
                </Item>
            </Tooltip>
        </NavLink>
    );
};

export default TopProductItem;
