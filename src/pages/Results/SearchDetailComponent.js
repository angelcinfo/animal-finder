import React from "react";

const SearchDetailComponent = (({searchSelected, handleVisible}) => {
    return (
        <div className="detailContainer" onClick={handleVisible}>
            <div className="detail">
                <img src={searchSelected.image} alt={searchSelected.title}/>
                <div className="animalDetail">
                    <a href={searchSelected.url} target="_blank" rel="noopener noreferrer">{searchSelected.url}</a>
                    <h2>{searchSelected.title} ({searchSelected.type})</h2>
                    <p>{searchSelected.description}</p>
                </div>
            </div>
        </div>
    )
})

export default SearchDetailComponent
