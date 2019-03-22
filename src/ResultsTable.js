import React, { Component } from 'react';
import './ResultsTable.css';
import { Table } from 'react-materialize';
import { Link } from "react-router-dom";
import { AnimateOnChange } from "react-animation";

class ResultsTable extends Component {

  render() {
    let rowItems = this.props.searchResults.map((recipe, id) => {
      return (
          <tr key={id}>
            <td>
              <Link to={"/recipe/" + recipe._id}>{recipe.title}</Link>
            </td>
          </tr>
      )

    });

    return (
      <div className="results-table">
        <AnimateOnChange>
          <Table striped={true}>
            <tbody>{rowItems}</tbody>
          </Table>
        </AnimateOnChange>
      </div>
    );
  }
}

export default ResultsTable;