import React, { useReducer } from "react";
import * as Components from "./components";
import { reducer } from "./reducer/reducer";
import { Types } from './types/types';
/**
 *
 * @constructor
 */
export const App = () => {
    let localStorageItem = localStorage.getItem('data');
    let data = localStorageItem ? localStorageItem : '[]';
    const [state, dispatch] = useReducer(reducer, JSON.parse(data));

    /**
     * adding new card
     */
    const add = () => {
        dispatch({
            type: Types.ADD,
            payload: {
                id: Math.floor(Math.random() * (1000 - 1 + 1) + 1),
            }
        });
    };

    /**
     * removing card
     * @param id
     */
    const remove = (id) => {
        dispatch({
            type: Types.REMOVE,
            payload: {
                id: id,
            }
        });
    };

    /**
     * sorting
     */
    const sort = () => {
        dispatch({
            type: Types.SORT,
        });
    }
  

    return (
        <div className="App">
            <div className="main">
                <Components.Header
                    state={state}
                    add={add}
                    sort={sort}
                />
                <Components.Cards
                    state={state}
                    remove={(id) => remove(id)}
                />
            </div>
            <Components.RightSide />
            <Components.Footer />
        </div>
    );
}
