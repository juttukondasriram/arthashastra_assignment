import { Component } from "react";
import "./index.css";

class Table extends Component {
  render() {
    const { data } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Year</th>
            <th>Medals</th>
          </tr>
        </thead>
        <tbody>
          {data.map((each) => (
            <tr key={each.Id}>
              <td>{each.Id}</td>
              <td>{each.Year}</td>
              <td>{each.Medals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
