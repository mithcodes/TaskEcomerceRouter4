import { createContext, useReducer } from "react";
import cartReducer from "./CartReducer";
import { useContext } from "react";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const initialState = {
  products: productsArr,
  cart: [],
};

const AppContext = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default Context;

export const AppState = () => {
  return useContext(AppContext);
};