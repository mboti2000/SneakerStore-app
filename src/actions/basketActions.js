export const addToBasket = (sneaker) =>{
    return { type: 'ADD_TO_BASKET', payload: sneaker };
};

export const removeFromBasket = (id) =>{
    return { type: 'REMOVE_FROM_BASKET', payload: id };
}

export const clearBasket = () =>{
    return { type: 'CLEAR_BASKET' };
};