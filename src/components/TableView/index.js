import React from "react";

import { useStore } from "../../store";
import { Table } from "./styles";

function TableView() {
  const { results } = useStore();

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Hair Color</th>
          <th>Skin Color</th>
        </tr>
      </thead>
      <tbody>
        {results.map((item, i) => (
          <tr key={i}>
            <td>{i}</td>
            <td>{item.name}</td>
            <td>{item.height}</td>
            <td>{item.mass}</td>
            <td>{item.hair_color}</td>
            <td>{item.skin_color}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableView;
