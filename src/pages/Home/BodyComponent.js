import React from 'react';
import '../../App.css';
import SearchPageComponent from "./components/search/SearchPageComponent";

function BodyComponent() {
    return (
        <main className="body">
            <SearchPageComponent />
        </main>
    );
}

export default BodyComponent;
