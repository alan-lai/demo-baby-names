import React from 'react';
import Name from './Name';

export default ({ data, favourites, filterText, toggleFavourite }) => {
    const namesList = data
    .filter((name) => {
        return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 && favourites.indexOf(name.id) < 0;
    })
    .map(({ id, name, sex }) => {
        return (
            <Name id={ id } sex={ sex } name={ name } toggleFavourite={ toggleFavourite } />
        )
    });

    return (
        <div>
            <ul>
                { namesList }
            </ul>
        </div>
    );
}
