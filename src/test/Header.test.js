import React from "react";
import {BrowserRouter} from "react-router-dom";
import { render, fireEvent } from '@testing-library/react';
import Header from "../components/Header";
import {RECIPIE_FAVOURITE_PATH} from "../api/config";

describe("testing Header component", () => {
    test('url changes when user clicked on the Navigation Link', () => {
        const { getByTestId } = render(<BrowserRouter><Header/></BrowserRouter>);
        const link = getByTestId('favorite-meals-link')

        expect(global.window.location.pathname).not.toContain(RECIPIE_FAVOURITE_PATH);
        fireEvent.click(link, {target: {href: RECIPIE_FAVOURITE_PATH}});
        expect(global.window.location.pathname).toContain(RECIPIE_FAVOURITE_PATH);
    })
});
