import React, { Component } from "react";

class Row extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.fullName}</td>

        <td>{this.props.data.phone}</td>

        <td>{this.props.data.email}</td>
        <td
          onClick={() => {
            this.props.deleteRow(this.props.row);
          }}
        />
        <td
          onClick={() => {
            this.props.editRow(this.props.row);
          }}
        />
      </tr>
    );
  }
}

export default Row;
