import React, { useContext } from "react";
import { render, fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks'
import SingleProductContent from "../components/SingleProductContent";
import { BrowserRouter } from "react-router-dom";
import { AppContext } from "../api/context";

//Mock of Meal Object
const singleMeal = {
    mealTitle: 'Beef',
    mealImage: 'https://www.gastronom.ru/binfiles/images/20170418/b87bb973.jpg',
    instructions: 'Uzbek pilaf in a cauldron is rightfully considered the most popular type of this dish.',
    ingredients: [],
    categoryMeal: 'Meat'
}

describe("testing SingleProductContent component", () => {

    beforeEach(() => {
        const { result } = renderHook(() => useContext(AppContext));
        //mock context.parseSingleMealData function
        const mockParseSingleMeal = (result.current.parseSingleMealData = jest.fn());
        mockParseSingleMeal.mockReturnValue(singleMeal);

        const mockSendProductToFavorites = (result.current.onSendProductToFavorites = jest.fn());
        mockSendProductToFavorites.mockReturnValue(singleMeal);

        const mockRemoveProductFromFavorites = (result.current.onRemoveProductFromFavorites = jest.fn());
        mockRemoveProductFromFavorites.mockReturnValue(singleMeal)
    })

    const bottomTitle = 'How to do it?!...';

    test('render component successfully', () => {

        const { getByText } = render(<BrowserRouter><SingleProductContent/></BrowserRouter>);

        expect(getByText(singleMeal.mealTitle)).toBeInTheDocument();
        expect(getByText(bottomTitle)).toBeInTheDocument();

    });

    test('change favorite meal icon after user clicked on', () => {

        const { queryByTestId } = render(<BrowserRouter><SingleProductContent/></BrowserRouter>);

        expect(queryByTestId('not-favorite-icon')).toBeInTheDocument();
        expect(queryByTestId('favorite-icon')).not.toBeInTheDocument();

        fireEvent.click(queryByTestId('not-favorite-icon'));

        expect(queryByTestId('not-favorite-icon')).not.toBeInTheDocument();
        expect(queryByTestId('favorite-icon')).toBeInTheDocument();

        fireEvent.click(queryByTestId('favorite-icon'));

        expect(queryByTestId('not-favorite-icon')).toBeInTheDocument();
        expect(queryByTestId('favorite-icon')).not.toBeInTheDocument();

    })
});