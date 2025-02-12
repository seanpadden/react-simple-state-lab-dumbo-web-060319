import React, { Component } from 'react';
import Cell from "./Cell.js";

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
        <Cell />
      </div>
     
    )
  }
  
}

const redArray = (x) => 
{
  let array = [];
  for (let i = 0; i < 10; i++) {
    array[i] = []

    for (let j = 0; j < 10; j++) {
      array[i][j] = x

    }
  }
  return array
}

Matrix.defaultProps = {
  values: redArray("#F00")
};