import React from "react";
import { render, fireEvent } from '@testing-library/react';
import ContentProductItemsWrapper from "../components/ContentProductItemsWrapper";
import { BrowserRouter } from "react-router-dom";

const meals = [
    {
        id: 1,
        title: 'Beef',
        image: 'https://www.gastronom.ru/binfiles/images/20170418/b87bb973.jpg',
        instructions: 'Uzbek pilaf in a cauldron is rightfully considered the most popular type of this dish.',
        ingredients: [],
        categoryMeal: 'Meat'
    },
    {
        id: 2,
        title: 'Pasta',
        image: 'https://www.gastronom.ru/binfiles/images/20170418/b87bb973.jpg',
        instructions: 'Very taste pasta',
        ingredients: [],
        categoryMeal: 'Bread'
    },
    {
        id: 3,
        title: 'Salmon Salad',
        image: 'https://www.gastronom.ru/binfiles/images/20170418/b87bb973.jpg',
        instructions: 'Very taste salad',
        ingredients: ['salmon fish'],
        categoryMeal: 'Salads'
    }
]

describe("testing ContentProductItemsWrapper component", () => {
    const defaultTitle = 'Top Recipies:';

    test('render component successfully with default title', () => {
        const { getByText } = render(
            <BrowserRouter>
                <ContentProductItemsWrapper meals={meals} showCategoryTitle={false}/>
            </BrowserRouter>
        );
        expect(getByText(defaultTitle)).toBeInTheDocument();
    });

    test('render component successfully with category title', () => {
        const { getByText, queryByText } = render(
            <BrowserRouter>
                <ContentProductItemsWrapper meals={meals} showCategoryTitle={true} categoryTitle={'Pasta'}/>
            </BrowserRouter>
        );
        expect(getByText('Pasta')).toBeInTheDocument();
        expect(queryByText(defaultTitle)).not.toBeInTheDocument();
    });

    test('render component successfully with meals', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <ContentProductItemsWrapper meals={meals} showCategoryTitle={false} />
            </BrowserRouter>
        );

        expect(getByTestId('products-wrapper').children).toHaveLength(3);
    });

    test('render Loader when meals is not existed', () => {
        const { getByTestId, queryByText } = render(
            <BrowserRouter>
                <ContentProductItemsWrapper meals={null} showCategoryTitle={true} categoryTitle={'Pasta'}/>
            </BrowserRouter>
        );
        expect(getByTestId('loader')).toBeInTheDocument();
        expect(queryByText(defaultTitle)).not.toBeInTheDocument();
    });
});
