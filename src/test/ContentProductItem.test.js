import React, { useContext } from "react";
import { render, fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks'
import ContentProductItem from "../components/ContentProductItem";
import { BrowserRouter } from "react-router-dom";
import { AppContext } from "../api/context";

//Mock of Meal Object
const singleMeal = {
    id: 1,
    title: 'Beef',
    image: 'https://www.gastronom.ru/binfiles/images/20170418/b87bb973.jpg',
}

describe("testing ContentProductItem component", () => {
    beforeEach(() => {
        const { result } = renderHook(() => useContext(AppContext));

        //mock context.parseSingleMealData function
        const mockParseSingleMeal = (result.current.parseSingleMealData = jest.fn());
        mockParseSingleMeal.mockReturnValue(singleMeal);
        //mock context.onSendProductToFavorites function
        const mockSendProductToFavorites = (result.current.onSendProductToFavorites = jest.fn());
        mockSendProductToFavorites.mockReturnValue(singleMeal);
        //mock context.onRemoveProductFromFavorites function
        const mockRemoveProductFromFavorites = (result.current.onRemoveProductFromFavorites = jest.fn());
        mockRemoveProductFromFavorites.mockReturnValue(singleMeal);
        //mock context.onRemoveProductFromFavorites function
        const mockGetFavoritesMealsList = (result.current.getFavoritesMealsList = jest.fn());
        mockGetFavoritesMealsList.mockReturnValue(singleMeal)
    });

    test('render component successfully', () => {
        const { getByText } = render(<BrowserRouter><ContentProductItem product={singleMeal}/></BrowserRouter>);
        expect(getByText(singleMeal.title)).toBeInTheDocument();
    });

    test('render component unsuccessfully', () => {
        const { queryByText } = render(<BrowserRouter><ContentProductItem product={null}/></BrowserRouter>);
        expect(queryByText(singleMeal.title)).not.toBeInTheDocument();
    });

    test('change favorite meal icon after user clicked on', () => {

        const { queryByTestId } = render(<BrowserRouter><ContentProductItem product={singleMeal}/></BrowserRouter>);

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