import React, { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      el8: 0,
      el9: 0,
    };
  }

  toggleColor = (id) => {
    this.setState((prev) => ({
      [id]: (prev[id] + 1) % 3,
    }));
  };

  getStyle(state) {
    if (state === 1) return { background: "lightblue", color: "darkblue" };
    if (state === 2) return { background: "lightpink", color: "crimson" };
    return { background: "white", color: "black" };
  }

  render() {
    return (
      <div>
        <h3>Мої хобі:</h3>
        <ul>
          <li>Гончарство</li>

          <li
            onClick={() => this.toggleColor("el8")}
            style={this.getStyle(this.state.el8)}
          >
            Збір пазлів
          </li>

          <li
            onClick={() => this.toggleColor("el9")}
            style={this.getStyle(this.state.el9)}
          >
            Фрісбі
          </li>
        </ul>

        <h3>Мої улюблені книги/фільми:</h3>
        <ol>
          <li>Нічний цирк</li>
          <li>Тінь вітру</li>
          <li>Марсіанин</li>
        </ol>

        <h3>Моє улюблене місто - Париж</h3>
        <p>Париж — це неймовірне місто...</p>
      </div>
    );
  }
}

export default Content;
