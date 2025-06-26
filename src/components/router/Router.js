import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import SearchResultsComponent from "../search/SearchResultsComponent";
import BodyComponent from "../BodyComponent";
import HeaderComponent from "../HeaderComponent";

const AppRouter = () => {
    return (
        <Router>
            <HeaderComponent />
            <Routes>
                    <Route path="/" element={<BodyComponent />} />
                    <Route path="/search" element={<SearchResultsComponent />} />
                    <Route path="/search/:animalFinder" element={<SearchResultsComponent />} />
                    <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
