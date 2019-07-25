import React from "react";

let contextType;
const Context = (contextType = React.createContext());

const initialState = {
  isLoading: false,
  results: [],
  page: 1,
  maxPage: 0
};

function reducerFunc(state, { type, ...actions }) {
  switch (type) {
    case "toggleLoading": {
      return {
        ...state,
        isLoading: !state.isLoading
      };
    }
    case "setData": {
      const { count, results } = actions;
      const countNum = Number(count / 10);
      let maxPage = parseInt(countNum);

      if (countNum !== maxPage) maxPage += 1;

      return { ...state, results, maxPage };
    }
    case "nextData": {
      return {
        ...state,
        page: state.page + 1
      };
    }
    case "prevData": {
      return {
        ...state,
        page: state.page - 1
      };
    }
    default:
      throw new Error(`cannot using this type: ${type}`);
  }
}

function Provider({ children }) {
  const [state, dispatch] = React.useReducer(reducerFunc, initialState);

  React.useEffect(() => {
    (async () => {
      dispatch({ type: "toggleLoading" });

      try {
        const url = `https://swapi.co/api/people/?page=${state.page}`;
        const getData = await fetch(url);
        const jsonData = await getData.json();

        dispatch({ type: "setData", ...jsonData });
      } catch (error) {
        throw new Error(error);
      }

      dispatch({ type: "toggleLoading" });
    })();
  }, [dispatch, state.page]);

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  );
}

function useStore() {
  const store = React.useContext(contextType);
  if (!store) {
    throw new Error("cannot using this store");
  }

  return store;
}

export { Provider, useStore };
