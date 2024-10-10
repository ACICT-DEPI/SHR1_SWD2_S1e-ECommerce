import PRODUCTS from "../data";



const initialState = {
  cartItems: [],
  cartTotal: 0,
  product:  PRODUCTS,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cartItems.find(
        (product) => product.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    case "UPDATE_CART_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: action.payload.quantity }
            : product
        ),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((product) => product.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;