import React, { Component } from "react";
import Row from "./Row";
import Input from "./Components/Input";

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

      this.setState(
        {
          users: [...this.state.users, user]
        },
        this.clearInputs()
      );
    } else if (this.submitInput.value === "Edit") {
      const i = Number(this.rowCount.value);
      const updatedUsers = [...this.state.users];
      updatedUsers[i].fullName = this.state.fullName;
      updatedUsers[i].phone = this.state.phone;
      updatedUsers[i].email = this.state.email;
      this.setState(
        {
          users: updatedUsers,
          [this.submitInput.value]: "Submit"
        },
        this.clearInputs(),
        this.forceUpdate()
      );
    }
  };

  clearInputs = () => {
    this.setState({
      [this.inputFullName.value]: "",
      [this.inputPhone.value]: "",
      [this.inputEmail.value]: "",
      fullName: "",
      phone: "",
      email: "",
      input: "Submit"
    });
  };

  deleteRow = row => {
    const { users } = this.state;
    const i = users.indexOf(row);
    this.setState({
      users: this.state.users.slice(0, i)
    });
    this.clearInputs();
  };

  editRow = row => {
    this.setState(
      {
        [this.inputFullName.value]: this.state.users[row].fullName,
        fullName: this.state.users[row].fullName,
        [this.inputPhone.value]: this.state.users[row].phone,
        phone: this.state.users[row].phone,
        [this.inputEmail.value]: this.state.users[row].email,
        email: this.state.users[row].email,
        [this.rowCount.value]: row,
        input: "Edit"
      },
      this.forceUpdate()
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Users</label>
          <div>
            <div>ФИО</div>
            <Input
              type="text"
              name="fullName"
              ref={ref => (this.inputFullName = ref)}
              onChange={e => this.setState({ fullName: e.target.value })}
              value={this.state.fullName}
              placeholder="Иванов Иван Иванович"
            />
          </div>
          <div>
            <div>Телефон</div>
            <Input
              type="text"
              name="phone"
              ref={ref => (this.inputPhone = ref)}
              onChange={e => this.setState({ phone: e.target.value })}
              value={this.state.phone}
              placeholder="+7(903)1234567"
            />
          </div>
          <div>
            <div>Почта</div>
            <Input
              type="email"
              name="email"
              ref={ref => (this.inputEmail = ref)}
              onChange={e => this.setState({ email: e.target.value })}
              value={this.state.email}
              placeholder="Email"
            />
          </div>
          <div>
            <div>
              <input
                type="submit"
                ref={ref => (this.submitInput = ref)}
                value={this.state.input}
              />
            </div>
          </div>

          <input type="hidden" value="" ref={ref => (this.rowCount = ref)} />
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
