import React from 'react';

export default class Cadran extends React.Component {
  render() {
    return (
      <div style={{border: "solid"}}>
        <p>{this.props.message}</p>
        <p>Temperature actuelle : {this.props.currentTemperature}</p>
      </div>
    )
  }
}
