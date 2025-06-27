import React, {useEffect, useState} from "react";
import {getAnimals} from "../../services/Services";
import {useParams} from "react-router-dom";
import {saveSearchData} from "../../actions/commonActions";
import {useDispatch} from "react-redux";
import SearchDetailComponent from "./SearchDetailComponent";
import NoResultsPageComponent from "../NoResults/NoResultsComponent";
import {NO_RESULTS} from "../../constants";

function SearchResultsComponent() {
    const [searchSelected, setSearchSelected] = useState('');
    const [result, setResult] = useState([]);
    const [isDetailVisible, setIsDetailVisible] = useState(true);

    const handleVisible = () => {
        setIsDetailVisible(!isDetailVisible);
    }

    const {animalFinder} = useParams();
    const dispatch = useDispatch();

    const selectedSearchAction = (index) => {
        setSearchSelected(result[index]);
        setIsDetailVisible(true);
    }

    useEffect(() => {
        dispatch(saveSearchData(animalFinder));
        if (animalFinder !== NO_RESULTS && animalFinder !== undefined) {
            setResult(getAnimals(animalFinder));
        } else {
            setResult([]);
        }
        // eslint-disable-next-line
    }, [animalFinder]);

    return (
        <>
                <div className="resultsPage">
                    {
                        result.length > 0 ? (
                    <>
                        <div className="results">
                            {result.map((result, index) => (
                                <div key={result.id} className="animalDetail">
                                    <a href={result.url} target="_blank" rel="noopener noreferrer">{result.url}</a>
                                    <h2 onClick={() => selectedSearchAction(index)}>{result.title} ({result.type})</h2>
                                    <p>{result.description}</p>
                                </div>
                            ))}
                        </div>
                        {!!searchSelected && isDetailVisible && (
                            <SearchDetailComponent searchSelected={searchSelected} handleVisible={handleVisible}/>)}
                    </>
                        ): (
                            <div className="results">
                                {
                                    <NoResultsPageComponent noResultsReason={animalFinder}/>
                                }
                            </div>
                        )
                    }
                </div>
        </>
    )
}

export default SearchResultsComponent;
