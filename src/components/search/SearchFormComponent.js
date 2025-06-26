import React, {useEffect, useState} from "react";
import '../../App.css';
import './Search.css';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

function SearchFormComponent() {

    const searchData = useSelector((state) => state.common.searchData);
    const [searchString, setSearchString] = useState('');
    const navigate = useNavigate();


    const handleInputChange = (searchString) => {
        setSearchString(searchString.target.value || '');
    };

    const handleSubmit = () => {
            navigate(`/search/${searchString}`);
    };

    const handleClearInput = () => {
        setSearchString('');
    };

    useEffect(() => {
        setSearchString(!!searchData ? searchData : '');
    }, [searchData]);

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div className="search-input-container">
                    <SearchIcon className="search-icon" />
                    <input
                        type="text"
                        placeholder="Escribe para buscar"
                        value={searchString}
                        onChange={handleInputChange}
                        className="input"
                    />
                    {!!searchString && (
                        <button onClick={handleClearInput} className="clear-button">&#x2715;</button>
                    )}
                </div>
                <button className={!!searchString ? 'activated' : ''} disabled={!searchString} type="submit">Buscar</button>
            </form>
        </>
);
}

export default SearchFormComponent;
