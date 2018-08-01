import React, { Component } from "react";
import Row from "./Row";
import Input from "./Components/Input";
import Button from "./Components/Button";

class TestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "Submit",
      fullName: "",
      phone: "",
      email: "",
      users: []
    };
  }
  onSubmit = e => {
    e.preventDefault();

    if (this.submitInput.value === "Submit") {
      const user = {
        fullName: this.state.fullName,
        phone: this.state.phone,
        email: this.state.email
      };

      this.setState({
        users: [...this.state.users, user],
        fullName: "",
        phone: "",
        email: ""
      });
    } else if (this.submitInput.value === "Edit") {
      const i = Number(this.rowRef.value);
      this.setState(
        {
          [this.state.fullName[i]]: this.inputFullName.value,
          [this.state.phone[i]]: this.inputPhone.value,
          [this.state.email[i]]: this.inputEmail.value,
          submitInput: "Submit"
        },
        this.clearInputs(),
        this.forceUpdate()
      );
    }
  };

  clearInputs() {
    this.setState({
      [this.inputFullName.value]: "",
      [this.inputPhone.value]: "",
      [this.inputEmail.value]: "",
      [this.state.fullName]: "",
      [this.state.phone]: "",
      [this.state.email]: ""
    });
  }

  deleteRow(row) {
    const i = this.state.users.indexOf(row);
    this.setState({
      users: this.state.users.slice(0, i)
    });
    this.clearInputs();
  }

  editRow(row) {
    var i = this.state.users.indexOf(row);
    this.setState({
      [this.inputFullName.value]: this.state.users[i].fullName,
      [this.state.fullName]: this.state.users[i].fullName,
      [this.inputPhone.value]: this.state.users[i].phone,
      [this.state.phone]: this.state.users[i].phone,
      [this.inputEmail.value]: this.state.users[i].email,
      [this.state.email]: this.state.users[i].email,
      [this.rowRef.value]: row,
      [this.state.input]: "Edit"
    });
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Users</label>
          <div>
            <span>ФИО</span>
            <Input
              type="text"
              ref={ref => (this.inputFullName = ref)}
              onChange={e => this.setState({ fullName: e.target.value })}
              value={this.state.fullName}
              placeholder="Иванов Иван Иванович"
            />
          </div>
          <div>
            <span>Телефон</span>
            <Input
              type="text"
              ref={ref => (this.inputPhone = ref)}
              onChange={e => this.setState({ phone: e.target.value })}
              value={this.state.phone}
              placeholder="+7(903)1234567"
            />
          </div>
          <div>
            <span>Почта</span>
            <Input
              type="email"
              ref={ref => (this.inputEmail = ref)}
              onChange={e => this.setState({ email: e.target.value })}
              value={this.state.email}
              placeholder="Email"
            />
          </div>
          <div>
            <div>
              <Button
                type="submit"
                ref={ref => (this.submitInput = ref)}
                value={this.state.input}
              />
            </div>
          </div>

          <input type="hidden" value="" ref={ref => (this.rowRef = ref)} />
        </form>
        <div>
          <table>
            <thead>
              <tr>
                <th>ФИО</th>
                <th>ТЕЛЕФОН</th>
                <th>ПОЧТА</th>
                <th>ИЗМЕНИТЬ</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((data, index) => {
                return (
                  <Row
                    editRow={this.editRow}
                    users={this.state.users}
                    data={data}
                    key={index}
                    row={index}
                    deleteRow={this.deleteRow}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TestForm;