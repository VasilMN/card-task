import React from 'react';
import './css/AddCard.scss';

interface AddCardInterface {
    sort: Function;
    add: Function;
}

/**
 *
 * @param add
 * @param sort
 * @constructor
 */
export const Header: React.FC<AddCardInterface> = ({ add, sort }) => {

    return (
        <div className="header">
            <button onClick={() => add()} >add card</button>
            <button onClick={() => sort()} >sort cards</button>
        </div>
    );
};
