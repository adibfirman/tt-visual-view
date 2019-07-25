import React from "react";

import TableView from "../TableView";
import { Wrapper } from "./styles";
import { useStore } from "../../store";

function App() {
  const { page, isLoading, maxPage, dispatch } = useStore();

  function handleNext() {
    dispatch({ type: "nextData" });
  }

  function handlePrev() {
    dispatch({ type: "prevData" });
  }

  return (
    <Wrapper>
      <TableView />
      <div>
        <button disabled={isLoading || page === 1} onClick={handlePrev}>
          prev
        </button>
        <div>Page: {page}</div>
        <button disabled={isLoading || maxPage === page} onClick={handleNext}>
          next
        </button>
      </div>
    </Wrapper>
  );
}

export default App;
