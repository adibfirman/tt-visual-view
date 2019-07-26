import React from "react";
import { Graph } from "@qlue-ui/react-component/dist/Graph";

import { useStore } from "../../store";
import { Wrapper } from "./styles";

function LineChartView() {
  const { results } = useStore();
  const datas = results.map(item => {
    return {
      name: item.name,
      height: parseFloat(item.height) || 0,
      mass: parseFloat(item.mass) || 0
    };
  });

  return (
    <Wrapper>
      <Graph
        width="95%"
        height={300}
        data={datas}
        chart={{ LINE: [{ dataKey: "height" }, { dataKey: "mass" }] }}
      />
    </Wrapper>
  );
}

export default LineChartView;
