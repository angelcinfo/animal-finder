import React from "react";
import '../../../../App.css';
import '../../../../components/search/Search.css';
import { ReactComponent as GoogleLogo } from '../../../../assets/img/google_logo.svg';
import SearchFormComponent from "../../../../components/search/SearchFormComponent";

function SearchPageComponent() {

    return (
        <>
            <GoogleLogo/>
            <SearchFormComponent />
        </>
    );
}

export default SearchPageComponent;
