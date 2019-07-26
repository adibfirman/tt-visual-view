import React from "react";
import { Button } from "@qlue-ui/react-component/dist/Button";

import TableView from "../TableView";
import { Wrapper, ActionWrapper } from "./styles";
import { useStore } from "../../store";
import LineChartView from "../LineChartView";

function App() {
  const { page, isLoading, maxPage, dispatch } = useStore();

  return (
    <Wrapper>
      {isLoading ? <h3>Loading...</h3> : <TableView />}
      <ActionWrapper>
        <Button
          size="small"
          disabled={isLoading || page === 1}
          onClick={() => dispatch({ type: "prevData" })}
        >
          PREV
        </Button>
        <b>
          Page: <i>{page}</i>
        </b>
        <Button
          size="small"
          disabled={isLoading || maxPage === page}
          onClick={() => dispatch({ type: "nextData" })}
        >
          NEXT
        </Button>
      </ActionWrapper>
      {isLoading ? <h3>Loading...</h3> : <LineChartView />}
    </Wrapper>
  );
}

export default App;
