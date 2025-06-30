import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import SearchFormComponent from './SearchFormComponent';

const mockStore = configureStore();

describe('SearchFormComponent', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            common: { searchData: '' },
        });
    });

    test('activates the search button when input is typed', () => {
        render(
            <MemoryRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true
                }}
            >
                <Provider store={store}>
                    <SearchFormComponent />
                </Provider>
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText(/Escribe para buscar/i);
        const button = screen.getByRole('button', { name: /buscar/i });

        expect(button).toBeDisabled();

        fireEvent.change(input, { target: { value: 'test' } });

        expect(button).not.toBeDisabled();
    });

    test('shows clear button when input has text', () => {
        render(
            <MemoryRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true
                }}
            >
                <Provider store={store}>
                    <SearchFormComponent />
                </Provider>
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText(/Escribe para buscar/i);

        expect(screen.queryByText('✕')).not.toBeInTheDocument();

        fireEvent.change(input, { target: { value: 'test' } });

        expect(screen.getByText('✕')).toBeInTheDocument();
    });

    test('clears input when clear button is clicked', () => {
        render(
            <MemoryRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true
                }}
            >
                <Provider store={store}>
                    <SearchFormComponent />
                </Provider>
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText(/Escribe para buscar/i);

        fireEvent.change(input, { target: { value: 'test' } });
        expect(input.value).toBe('test');

        const clearButton = screen.getByText('✕');
        fireEvent.click(clearButton);

        expect(input.value).toBe('');
    });

    test('loads initial search data from store', () => {
        const storeWithData = mockStore({
            common: { searchData: 'initial search' },
        });

        render(
            <MemoryRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true
                }}
            >
                <Provider store={storeWithData}>
                    <SearchFormComponent />
                </Provider>
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText(/Escribe para buscar/i);
        
        expect(input.value).toBe('initial search');
    });
});
