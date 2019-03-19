import React, { Component } from 'react';
import './ResultsTable.css';
import { Table } from 'react-materialize';

class ResultsTable extends Component {

  render() {
    let rowItems = this.props.searchResults.map(recipe => {
      return (
          <tr>
            {recipe.title}
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