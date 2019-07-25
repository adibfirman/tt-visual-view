import React from "react";

import { useStore } from "../../store";

function TableView() {
  const { results } = useStore();

  return (
    <table>
      <thead>
        <tr>
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
            <td>{item.name}</td>
            <td>{item.height}</td>
            <td>{item.mass}</td>
            <td>{item.hair_color}</td>
            <td>{item.skin_color}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableView;
