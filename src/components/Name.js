import React from 'react';

export default ({ id, name, sex, toggleFavourite }) => {
    return (
        <li key={ id.toString() } className={ sex } onClick={() => {toggleFavourite(id)} } >{ name }</li>
    )
}