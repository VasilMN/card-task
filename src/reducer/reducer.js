import { unique } from "../unique/unique"

/**
 *
 * @param state
 * @param action
 */
export const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            const uniqueId = unique(state);
            localStorage.setItem('data', JSON.stringify([
                ...state,
                {
                    id: uniqueId,
                }
            ]));
            return [
                ...state,
                {
                    id: uniqueId,
                }
            ];
        case 'remove':
            localStorage.setItem('data', JSON.stringify(state.filter(item => item.id !== action.payload.id)));
            return state.filter(item => item.id !== action.payload.id);
        case 'sort':
            return [...state.sort((a, b) => a.id - b.id)];
        default:
            return state;
    }
}

