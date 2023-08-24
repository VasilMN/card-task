type Details = {
    id: number;
};

/**
 *
 * @param state
 */

export const unique = (state: Details[]) => {
    const id = Math.floor(Math.random() * (1000) + 1);
    if (state.length === 0) return id;
    let uniqueVar = state.filter(item => item.id === id);

    return uniqueVar.length > 0 ? unique(state) : id;
}