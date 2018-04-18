import React from 'react';
import Name from './Name';

export default ({ data, favourites, toggleFavourite }) => {
    const namesList = favourites.map(id => {
        const { name, sex } = data[id];
        return (
            <Name id={ id } name={ name } sex={ sex } toggleFavourite={ toggleFavourite } />
        )
    });
    return (
        <div className="favourites">
            <h4>{ favourites.length ? 'Your Shortlist' : 'Click on a name to shortlist it...' }</h4>
            <ul>
                { namesList }
            </ul>
            { favourites.length ? <hr /> : '' }
        </div>
    )
}