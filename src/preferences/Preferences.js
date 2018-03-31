import React, { Component } from 'react';
import './Preferences.css'

class Preferences extends Component {
  render() {
    return (
      <div className="table-container">
        <h1>Consumables</h1>
        <table>
          <tbody>
            <th>Food</th>
            <tr>
              <td><label><input className="btn" type="checkbox" />Dairy</label></td>
              <td><label><input className="btn" type="checkbox" />Protein</label></td>
              <td><label><input className="btn" type="checkbox" />Bread</label></td>
              <td><label><input className="btn" type="checkbox" />Pastry</label></td>
            </tr>
            <tr>
              <td><label><input className="btn" type="checkbox" />Fruits</label></td>
              <td><label><input className="btn" type="checkbox" />Vegetables</label></td>
              <td><label><input className="btn" type="checkbox" />Snacks</label></td>
              <td><label><input className="btn" type="checkbox" />Baby Food</label></td>
            </tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <th>Drinks</th>
            <tr>
              <td><label><input type="radio" />Water</label></td>
              <td><label><input type="radio" />Other</label></td>
            </tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <th>Other</th>
            <tr>
              <td><label><input type="radio" />Low Sodium</label></td>
              <td><label><input type="radio" />Gluten Free</label></td>
              <td><label><input type="radio" />Baking Staples</label></td>
              <td><label><input type="radio" />Pet Food</label></td>
              <td><label><input type="radio" />Other</label></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Preferences;
