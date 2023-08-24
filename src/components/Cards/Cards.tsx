import React from 'react';
import './css/Cards.scss';

type Details = {
    id: number;
};

interface GetCardInterface {
    state: Details[];
    remove: Function;
}

/**
 *
 * @param state
 * @param remove
 * @constructor
 */

export const Cards: React.FC<GetCardInterface> = ({ state, remove }) => {
    return (
        <div className='main-blocks'>
            {state && state.map((item, id) => {
                return (
                    <div className='blocks' key={id}>
                        <div className='with-x'><span onClick={() => {
                            remove(item.id);
                        }}>x</span></div>
                        <div key={id} className='without-x' >
                            <h1>{item.id}</h1>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};
