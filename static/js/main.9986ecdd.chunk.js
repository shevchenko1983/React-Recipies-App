(this.webpackJsonprecipies=this.webpackJsonprecipies||[]).push([[0],{45:function(n,t,e){},46:function(n,t,e){},61:function(n,t,e){"use strict";e.r(t);var r=e(2),a=e(1),o=e.n(a),c=e(13),i=e.n(c),s=(e(45),e(11)),u=e(3),l=(e(46),e(6)),p=e(7),d=e(36),b="/recipie/",x="favoriteMeals",f=function(n){var t=Object.values(n)[0],e=t.mealTitle,r=void 0===e?t.strMeal:e,a=t.mealImage,o=void 0===a?t.strMealThumb:a,c=t.instructions,i=void 0===c?t.strInstructions:c,s=t.categoryMeal,u=void 0===s?t.strCategory:s,l=[];for(var p in t)p.includes("strIngredient")&&t[p]&&l.push(t[p]);return{mealTitle:r,mealImage:o,instructions:i,ingredients:l,categoryMeal:u}},j=function(n){var t=[];return t.push(n),g(x)&&t.push.apply(t,Object(s.a)(g(x))),h(JSON.stringify(t)),t},h=function(n){localStorage.setItem(x,n)},g=function(n){return JSON.parse(localStorage.getItem(n))},m=o.a.createContext({}),v=e(14);function O(){var n=Object(l.a)(["   \n    color: #3f3f3f;\n    background-color: #fff;\n    width: 50px;\n    margin: auto;\n    border: none;\n    border-radius: 5px;\n    height: 26px;\n    display: inline-block;\n    right: 0px;\n    top: 0px;\n    position: absolute;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    cursor: pointer;\n    text-align: center;\n    \n    &:hover{\n      background-color: #f4f2f2;\n    }\n    \n    & svg{\n        position: relative;\n        top: 4px;\n        color: #3f3f3fa1;\n        width: 50px;\n        height: 20px;\n    }\n    \n    &:focus{\n        outline:none;\n        box-shadow: 0 5px 6px #c571b76b;\n    }\n"]);return O=function(){return n},n}function w(){var n=Object(l.a)(["\n    padding: 5px 15px;\n    color: #3f3f3f;\n    background-color: #ffc0cb82;\n    width: 100%;\n    max-width: 330px;\n    margin: auto;\n    border: none;\n    border-radius: 5px;    \n    overflow: hidden;\n    \n    \n    &:focus{\n        outline:none;\n        box-shadow: 0 5px 6px #c571b76b;\n    }\n"]);return w=function(){return n},n}function y(){var n=Object(l.a)(["\n     display: inline-block;\n     width: 330px;\n     maxWidth: 50%;\n     position: relative;\n     text-align: left;\n     border-top-right-radius: 5px;\n     border-bottom-right-radius: 5px;\n     overflow: hidden;\n     \n     @media (max-width: 660px){\n        max-width: 80%;\n     }\n"]);return y=function(){return n},n}var k=Object(p.a)("div")(y()),_=Object(p.a)("input")(w()),C=Object(p.a)("div")(O()),S=function(){var n=Object(a.useState)(""),t=Object(u.a)(n,2),e=t[0],o=t[1],c=Object(a.useState)(""),i=Object(u.a)(c,2),s=i[0],l=i[1],p=Object(a.useContext)(m);return Object(a.useEffect)((function(){s&&p.getMealsBySearch(s)}),[s]),Object(r.jsxs)(k,{className:"search",children:[Object(r.jsx)(_,{type:"text",placeholder:"Search some recipie...",value:e,onChange:function(n){return o(n.target.value)}}),Object(r.jsx)(C,{children:Object(r.jsx)(v.b,{to:{pathname:"/"},children:Object(r.jsx)(d.a,{onClick:function(){return l(e)}})})})]})},M=e(37);function N(){var n=Object(l.a)(["\n    padding: 10px 20px;\n    border-bottom: 2px solid #cfa4bf;\n    box-shadow: 0px 5px 7px #c571b76b;\n    margin-bottom: 25px;\n    \n    & svg.favorite-icon{\n        font-size: 25px;\n        margin-left: 30px;\n        cursor: pointer;\n        \n        &:hover{\n            color: #f69400;\n        }\n    }  \n  \n"]);return N=function(){return n},n}var T=Object(p.a)("div")(N()),E=function(){var n=Object(a.useContext)(m);return Object(r.jsxs)(T,{className:"header",children:[Object(r.jsx)(S,{}),Object(r.jsx)(v.b,{to:{pathname:"/"},children:Object(r.jsx)(M.a,{className:"favorite-icon",onClick:function(){return n.getFavoritesMealsList()}})})]})},F=e(8),I=e.n(F),L=e(17),z=function(){var n=Object(L.a)(I.a.mark((function n(t){var e;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+t);case 3:return e=n.sent,n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}(),D=function(){var n=Object(L.a)(I.a.mark((function n(){var t;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://www.themealdb.com/api/json/v1/1/random.php");case 3:return t=n.sent,n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}(),P=function(){var n=Object(L.a)(I.a.mark((function n(t){var e;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+t);case 3:return e=n.sent,n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}(),B=function(){var n=Object(L.a)(I.a.mark((function n(t){var e;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+t);case 3:return e=n.sent,n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}(),J=function(){var n=Object(L.a)(I.a.mark((function n(){var t;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://www.themealdb.com/api/json/v1/1/categories.php");case 3:return t=n.sent,n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}(),H=e(38),R=e.n(H);function W(){var n=Object(l.a)(["\n    width: 75px;\n    height: 75px;\n    border-radius: 50%;\n    border:3px solid #ffc0cb82;\n    background-size: 170%;\n    background-position: center;\n    background-repeat: no-repeat;\n    box-shadow: 0px 4px 3px #c571b76b;\n    margin: 0px 12px;\n    position: relative;\n    cursor: pointer;\n    display: inline-block;\n \n    \n    & p{\n        position: relative;\n        top: -42px;\n        left: 0;\n        right: 0;\n        text-decoration: none;\n    }\n"]);return W=function(){return n},n}var q=Object(p.a)("div")(W()),A=function(n){var t=n.product,e=Object(a.useContext)(m),o=t.id,c=(void 0===o&&t.idCategory,t.title),i=void 0===c?t.strCategory:c,s=t.image,u=void 0===s?t.strCategoryThumb:s,l=t.description,p=void 0===l?t.strCategoryDescription:l;return Object(r.jsx)("a",{onClick:function(){return e.getCategoryList(i)},children:Object(r.jsx)(R.a,{placement:"bottom",trigger:["hover"],mouseEnterDelay:.3,mouseLeaveDelay:.2,destroyTooltipOnHide:!0,overlay:Object(r.jsx)("span",{children:p}),align:{offset:[0,20]},overlayStyle:{backgroundColor:"#ffc0cbe0",color:"#000",maxWidth:"40%",margin:"auto",padding:"10px",borderRadius:"5px",maxHeight:"100px",overflow:"auto",boxShadow:"0px 4px 3px #c571b76b"},overlayClassName:"custom-tooltip",children:Object(r.jsx)(q,{className:"top-product__item",style:{backgroundImage:"url(".concat(u,")")},children:Object(r.jsx)("p",{children:i})})})})};function G(){var n=Object(l.a)(["\n    padding: 20px 0px;\n    padding-bottom: 10px;\n    // display: flex;\n    // flex-flow: row nowrap;\n    // justify-content: space-between;\n    overflow-x: auto;\n\twhite-space: nowrap;\n\t-ms-overflow-style: none;  /* IE and Edge */\n    scrollbar-width: none;  /* Firefox */\n    max-width: 90%;\n    margin: auto;\n\t\n\t&::-webkit-scrollbar{\n\t   background: transparent;\t  \n\t}\t\t\n"]);return G=function(){return n},n}var K=Object(p.a)("div")(G()),Q=function(){var n=Object(a.useState)([]),t=Object(u.a)(n,2),e=t[0],o=t[1],c=e.length>0?Object.values(e)[0]:null;return Object(a.useEffect)((function(){0===e.length&&J().then((function(n){return o([n])}))}),[e.length]),console.log(e),Object(r.jsx)(K,{className:"top-products__item",children:e.length>0&&c.categories.map((function(n,t){return Object(r.jsx)(A,{product:n},t)}))})},U=Object(a.memo)(Q),V=e(24),X=e(23);function Y(){var n=Object(l.a)(["  \n    max-width: 45%;\n    flex-basis: 50%;\n    align-self: flex-end;\n    margin: 10px;\n    color:#000;\n    text-decoration: none;\n    position: relative;    \n    \n    & .image-holder{\n        overflow: hidden;\n        border-radius: 10px;\n        max-width: 330px;\n        margin: auto;\n    }\n    \n    & .content-product__item-image{\n        max-width:330px;\n        height: 200px;\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center;\n        border-radius: 10px;\n        margin: auto;\n        overflow: hidden;\n        transition: all 0.3s ease-in-out;\n        box-shadow: 0px 5px 7px #c571b76b;\n        position: relative;\n        \n        &:hover{\n            transform: scale(1.1);\n            transition: all 0.5s ease-in-out;\n        }      \n    }\n    & .product-item__image-panel{\n        position: absolute;\n        background-color: #f8e3f0e3;\n        max-width: 330px;\n        left: 0;\n        right: 0;\n        margin: auto;\n        bottom: 0;\n        width: 100%;\n        padding: 5px 0px;\n        text-align: right;\n        border-bottom-left-radius: 10px;\n        border-bottom-right-radius: 10px;            \n             \n          & svg{              \n            padding-right: 15px;\n            color: #f17979;\n            cursor: pointer;\n            font-size: 18px;\n                \n            &:hover{\n              transform: scale(1.3);\n              transition: all 0.5s ease-in-out;\n            }\n         }\n    }\n    \n     @media (max-width: 767px){\n        max-width: 330px;\n        margin: auto;\n        flex-basis: 100%;\n        align-self: auto;       \n    }\n"]);return Y=function(){return n},n}var Z=Object(p.a)("div")(Y()),$=function(n){var t=n.product,e=Object(a.useContext)(m),o=Object(a.useState)([]),c=Object(u.a)(o,2),i=c[0],l=c[1],p=Object(a.useState)(!1),d=Object(u.a)(p,2),f=d[0],j=d[1];Object(a.useEffect)((function(){var n;i.includes(t.idMeal)||(null===(n=g(x))||void 0===n?void 0:n.some((function(n){return n.idMeal===t.idMeal})))?j(!0):j(!1)}),[i,t]);var h=t.image,O=void 0===h?t.strMealThumb:h,w=t.title,y=void 0===w?t.strMeal:w,k=t.id,_=void 0===k?t.idMeal:k;return Object(r.jsxs)(Z,{className:"content-product__item",children:[Object(r.jsxs)(v.b,{to:{pathname:b+_},children:[Object(r.jsx)("h3",{children:y}),Object(r.jsx)("div",{className:"image-holder",children:Object(r.jsx)("div",{className:"content-product__item-image",style:{backgroundImage:"url(".concat(O,")")}})})]}),Object(r.jsx)("div",{className:"product-item__image-panel",children:f?Object(r.jsx)(X.a,{}):Object(r.jsx)(V.a,{onClick:function(){return l(Object(s.a)(e.onSendProductToFavorites(t)))}})})]})};function nn(){var n=Object(l.a)(["\n    padding: 20px;\n    \n    & h3{\n       text-transform: capitalize;    \n    }  \n    \n    & .content-products__item{\n        display: flex;\n        flex-flow: row wrap;\n        // overflow: hidden;\n    }   \n    \n    & a{       \n        color:#000;\n        text-decoration: none;        \n    }  \n    \n    @media (max-width: 767px){\n        flex-flow: column nowrap;       \n    }\n"]);return nn=function(){return n},n}var tn=Object(p.a)("div")(nn()),en=function(n){var t=n.meals,e=n.showCategoryTitle,a=n.categoryTitle,o=[];t.forEach((function(n){return n.meals?o.push.apply(o,Object(s.a)(n.meals)):o.push(n)}));var c=e?a+":":"Top Recipies: ";return Object(r.jsxs)(tn,{children:[Object(r.jsx)("h3",{children:o.length>0?c:"No Results..."}),Object(r.jsx)("div",{className:"content-products__item",children:o.map((function(n,t){return Object(r.jsx)($,{product:n},t)}))})]})},rn=e(4);function an(){var n=Object(l.a)(["\n    padding: 0px 15px;\n    margin-bottom: 20px;\n    & p{\n        text-align: justify;\n    }\n"]);return an=function(){return n},n}var on=Object(p.a)("div")(an()),cn=function(n){var t=n.text;return Object(r.jsx)(on,{children:Object(r.jsx)("p",{children:t})})};function sn(){var n=Object(l.a)(["\n    & .product_options{\n        padding: 0px 15px;\n        display: flex; \n        position: relative;    \n        \n        & .product_category{\n            position: absolute;\n            background-color: antiquewhite;\n            padding: 5px 10px;\n            top: 10px;\n            border-top-right-radius: 2px;\n            border-bottom-right-radius: 2px;\n            cursor: pointer;\n            \n            &:hover{\n                color: #cdc0ff;\n            }\n        }\n        \n        & .product-item__image-panel{\n                position: absolute;\n                background-color: #f8e3f0e3;\n                left: 0;              \n                margin: auto;\n                bottom: 20px;\n                width: 100%;\n                max-width: 50%;\n                padding: 5px 0px;\n                text-align: right;\n                border-bottom-left-radius: 5px;\n                border-bottom-right-radius: 5px;            \n                 \n              & svg{              \n                padding-right: 15px;\n                color: #f17979;\n                cursor: pointer;\n                font-size: 18px;\n                    \n                &:hover{\n                  transform: scale(1.3);\n                  transition: all 0.5s ease-in-out;\n                }\n             }\n        }   \n    }\n    & img{\n        width: 100%;\n        max-width: 50%;\n        margin-bottom: 20px;\n        border-radius: 5px;\n    }\n    & ol{\n        margin: 0;\n        & p{\n            margin: 0;\n            font-weight: 600;\n        }\n        & li{       \n            text-align: left;\n            text-transform: capitalize;\n        }\n    }\n   \n   @media (max-width: 767px){\n      .product_options{\n         flex-direction: column;\n         \n         & img{\n            max-width: 100%;\n         }\n         \n         & .product-item__image-panel{\n            position: relative;\n            max-width: 100%;\n            bottom: 50px;\n         }\n      }\n   }\n"]);return sn=function(){return n},n}var un=Object(p.a)("div")(sn()),ln=function(){var n=Object(a.useState)({}),t=Object(u.a)(n,2),e=t[0],o=t[1],c=Object(a.useState)({}),i=Object(u.a)(c,2),l=i[0],p=i[1],d=Object(a.useState)([]),b=Object(u.a)(d,2),f=b[0],j=b[1],h=Object(a.useState)(!1),O=Object(u.a)(h,2),w=O[0],y=O[1],k=Object(rn.e)().location.pathname.split("/")[2],_=Object(a.useContext)(m);return Object(a.useEffect)((function(){k&&P(k).then((function(n){return o(n.meals)}))}),[k]),Object(a.useEffect)((function(){Object.entries(e).length>0&&p(_.parseSingleMealData(e))}),[Object.entries(e).length]),Object(a.useEffect)((function(){var n;f.includes(k)||(null===(n=g(x))||void 0===n?void 0:n.some((function(n){return n.idMeal===k})))?y(!0):y(!1)}),[f,k]),Object(r.jsx)(un,{children:Object.entries(l).length>0&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:l.mealTitle}),Object(r.jsxs)("div",{className:"product_options",children:[Object(r.jsx)("img",{src:l.mealImage,alt:""}),Object(r.jsx)("div",{className:"product-item__image-panel",children:w?Object(r.jsx)(X.a,{}):Object(r.jsx)(V.a,{onClick:function(){return j(Object(s.a)(_.onSendProductToFavorites.apply(_,Object(s.a)(e))))}})}),Object(r.jsx)(v.b,{className:"product_category",onClick:function(){return _.getCategoryList(l.categoryMeal)},to:{pathname:"/"},children:l.categoryMeal}),Object(r.jsxs)("ol",{className:"engridients",children:[Object(r.jsx)("p",{children:"Engridients: "}),l.ingredients.map((function(n,t){return Object(r.jsx)("li",{children:n},t)}))]})]}),Object(r.jsx)("h3",{children:"How to do it?!..."}),Object(r.jsx)(cn,{text:l.instructions})]})})};var pn=Object(rn.f)((function(){var n=Object(a.useState)([]),t=Object(u.a)(n,2),e=t[0],o=t[1],c=Object(a.useState)([]),i=Object(u.a)(c,2),l=i[0],p=i[1],d=Object(a.useState)({category:"",status:!1}),h=Object(u.a)(d,2),v=h[0],O=h[1];return Object(a.useEffect)((function(){l.length<5&&0===e.length&&D().then((function(n){return p([].concat(Object(s.a)(l),[n]))}))}),[l,e]),Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(m.Provider,{value:{getMealsBySearch:function(n){z(n).then((function(t){o([t]),O({category:n,status:!0})}))},getFavoritesMealsList:function(){o(Object(s.a)(g(x))),O({category:"Favorites Meals",status:!0})},setMealsListByDefault:p,parseSingleMealData:f,getCategoryList:function(n){B(n).then((function(t){o([t]),O({category:n,status:!0})}))},onSendProductToFavorites:j},children:[Object(r.jsx)(E,{}),Object(r.jsx)(U,{}),Object(r.jsx)(rn.a,{exact:!0,path:"/",render:function(){return Object(r.jsx)(en,{meals:e.length>0?e:l,showCategoryTitle:v.status,categoryTitle:v.category})}}),Object(r.jsx)(rn.a,{path:b,component:ln})]})})})),dn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,62)).then((function(t){var e=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;e(n),r(n),a(n),o(n),c(n)}))};i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(v.a,{children:Object(r.jsx)(pn,{})})}),document.getElementById("root")),dn()}},[[61,1,2]]]);
//# sourceMappingURL=main.9986ecdd.chunk.js.map