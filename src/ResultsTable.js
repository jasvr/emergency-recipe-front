import React, { Component } from 'react';
import './ResultsTable.css';
import { Table } from 'react-materialize';

class ResultsTable extends Component {

  render() {
    let exampleArray = [
      "Fajitas",
      "Omelet",
      "Salad",
      "Burrito",
      "Quiche",
      "Soup"
    ];

    let rowItems = exampleArray.map(recipe => {
      return (
          <tr>
            {recipe}
          </tr>
      )

    });

    return (
      <div>
        <Table striped={true}>
          <tbody>{rowItems}</tbody>
        </Table>
      </div>
    );
  }
}

export default ResultsTable;