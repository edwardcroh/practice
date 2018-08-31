import React, { Component } from 'react';

class Entries extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      item: ''
    };
  }

  showCurrentInput = e => {
    this.setState({
      item: e.target.value
    });
  };

  addToList = e => {
    e.preventDefault();
    const newList = this.state.list;
    if (this.state.item !== '') {
      newList.push(this.state.item);
    }
    this.setState(
      {
        list: newList,
        item: ''
      },
      console.log('added', this.state.item, 'to the list ->', this.state.list)
    );
    document.getElementById('main-input').value = '';
  };

  removeFromList = index => {
    this.state.list.splice(index, 1);
    this.setState(
      {
        list: this.state.list
      },
      console.log('removed. new list:', this.state.list)
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addToList}>
          <input
            type="text"
            name="entry"
            id="main-input"
            onChange={this.showCurrentInput}
          />
        </form>
        <p>{this.state.item}</p>
        <h3>List: </h3>
        {this.state.list.length > 0
          ? this.state.list.map((entry, i) => {
              return (
                <li key={i}>
                  {entry}{' '}
                  <button onClick={() => this.removeFromList(i)}>Delete</button>
                </li>
              );
            })
          : null}
      </div>
    );
  }
}

export default Entries;
