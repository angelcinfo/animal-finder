import React from 'react';
import '../../App.css';
import {useLocation} from "react-router-dom";
import SearchFormComponent from "../../components/search/SearchFormComponent";

function HeaderComponent() {

    const location = useLocation();

    // Verifica si la ruta actual empieza con `/search`
    const isSearchRoute = location.pathname.startsWith('/search');

    return (
        <header className="header">
            <div><h1>Animal Finder</h1></div>
            {!!isSearchRoute && <div className="headerSearchForm"><SearchFormComponent /></div>}
        </header>
    );
}

export default HeaderComponent;
