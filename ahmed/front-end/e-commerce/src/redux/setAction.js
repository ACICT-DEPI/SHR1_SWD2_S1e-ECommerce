
export const addToCartAction =(product) => {
  return {
    type: "ADD_TO_CART",
    payload: product
  };
};

export const updateCartQuantityAction = (id, quantity) => {
  return {
    type: "UPDATE_CART_QUANTITY",
    payload: { id, quantity },
  };
};

export const removeFromCartAction = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id,
  };
};

