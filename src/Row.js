import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

class Row extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.fullName}</td>

        <td>{this.props.data.phone}</td>

        <td>{this.props.data.email}</td>
        <td>
          <i
            className="fa fa-trash"
            onClick={() => {
              this.props.deleteRow(this.props.row);
            }}
          />
        </td>
        <td>
          <i
            className="fa fa-edit"
            onClick={() => {
              this.props.editRow(this.props.row);
            }}
          />
        </td>
      </tr>
    );
  }
}

export default Row;
