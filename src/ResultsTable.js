import React, { Component } from 'react';
import './ResultsTable.css';
import { Table } from 'react-materialize';

class ResultsTable extends Component {

  render() {
    let rowItems = this.props.searchResults.map((recipe, id) => {
      return (
          <tr key={id}>
            <td>
            <a href={"/recipe/" + recipe._id}>{recipe.title}</a>
            </td>
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