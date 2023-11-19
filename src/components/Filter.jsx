import React, { Component } from 'react';

class Filter extends Component {
  render() {
    const { name, onChange } = this.props;

    return (
      <div>
        <label>
          Filter contacts by name:
          <input
            type="text"
            value={name}
            onChange={e => onChange(e.target.value)}
          />
        </label>
      </div>
    );
  }
}

export default Filter;
