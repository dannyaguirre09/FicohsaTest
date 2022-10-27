import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App'
import SearchComponent from '../components/Search/SearchComponent'

describe('Search Test',  () => {
    test('An alert should not be displayed when you start the application', () => {
        render(<App/>);
        expect(screen.queryByText ('El campo no puede estar vacío')).toBeNull();
    })

    test('An alert should be displayed when an empty value is entered', () => {
        const onClickSearch = jest.fn();
        render(<SearchComponent onClickSearch={onClickSearch} />);  

        const inputSearch = screen.getByRole('search');
        const button = screen.getByRole('button');

        userEvent.clear(inputSearch);
        userEvent.type(inputSearch, '');

        userEvent.click(button);

        const alert = screen.queryByText('El campo no puede estar vacío')
        expect(alert).not.toBeNull();

    })

    test('When a non-empty value is entered, the function must be executed to find', () => {
        const onClickSearch = jest.fn();
        render(<SearchComponent onClickSearch={onClickSearch} />);  

        const inputSearch = screen.getByRole('search');
        const button = screen.getByRole('button');

        userEvent.clear(inputSearch);
        userEvent.type(inputSearch, 'clement');

        userEvent.click(button);
        const returnData = onClickSearch.mock.calls[0][0];

        expect(onClickSearch).toBeCalled();
    })
})