import React from "react";
import '../../App.css';
import {useSelector} from "react-redux";
import {NO_RESULTS} from "../../constants";

function NoResultsPageComponent({noResultsReason}) {

    const searchData = useSelector((state) => state.common.searchData);

    return (
        <>
            <div>
                {noResultsReason === NO_RESULTS && <p>No results found for {searchData}</p>}
                <p>Try looking for: <strong>insect, fish, horse, crocodilia, bear, cetacean, cow, lion, rabbit, cat,
                    snake, dog, bird.</strong></p>
            </div>
        </>
    );
}

export default NoResultsPageComponent;
