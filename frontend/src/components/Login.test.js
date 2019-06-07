import React from 'react'
import Login from "./Login";
import {cleanup, render,  fireEvent} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

describe('Check for text in header', () => {
    it('should contain the proper text', () => {
        const {getByText} = render(<BrowserRouter><Login/></BrowserRouter>);
        getByText('Login as a company!');
    });
});

afterEach(cleanup);
describe('Login button clicked', () => {
    it('should click on text', () => {
        const { getByText } = render(<BrowserRouter><Login name="Submit" /></BrowserRouter>);
        const textEl = getByText('Submit');
        fireEvent.click(textEl)
    })
});

afterEach(cleanup);
describe('Test that there are no changes on re rendering', () => {
    it('should contains name with prop change', () => {
        const { getByText, rerender } = render(<BrowserRouter><Login name="Submit" /></BrowserRouter>);
        getByText('Submit');
        rerender(<BrowserRouter><Login name="Submit" /></BrowserRouter>);
        getByText('Submit')
    })
});