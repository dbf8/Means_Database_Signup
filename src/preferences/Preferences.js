import React, { Component } from 'react';
import './Preferences.css'

class Preferences extends Component {

  render() {
    return (
      <div className="table-container">
        <h1 className="preferences-header">Preferences</h1>
        <table>
          <tbody>
            <th>Food</th>
            <tr>
              <td className="food-table"><label className="container">Dairy<input type="checkbox" /><span className="checkmark"></span></label></td>
              <td className="food-table"><label className="container">Protein<input type="checkbox" /><span className="checkmark"></span></label></td>
              <td className="food-table"><label className="container">Bread<input type="checkbox" /><span className="checkmark"></span></label></td>
            </tr>
            <tr>
              <td className="food-table"><label className="container">Pastry<input type="checkbox" /><span className="checkmark"></span></label></td>
              <td className="food-table"><label className="container">Fruits<input type="checkbox" /><span className="checkmark"></span></label></td>
              <td className="food-table"><label className="container">Vegetables<input type="checkbox" /><span className="checkmark"></span></label></td>
            </tr>
            <tr>
              <td className="food-table"><label className="container">Snacks<input type="checkbox" /><span className="checkmark"></span></label></td>
              <td className="food-table"><label className="container">Baby Food<input type="checkbox" /><span className="checkmark"></span></label></td>
            </tr>
          </tbody>
        </table>

        <table className="drinks">
          <tbody>
            <th>Drinks</th>
            <tr>
              <td className="water"><label className="container">Water<input type="checkbox" /><span className="checkmark"></span></label></td>
              <td><label className="container">Other<input type="checkbox" /><span className="checkmark"></span></label></td>
            </tr>
          </tbody>
        </table>

        <table className="other">
          <tbody>
            <th>Other</th>
            <tr>
              <td className="other-table"><label className="container">Low Sodium<input type="checkbox" /><span className="checkmark"></span></label></td>
              <td className="other-table"><label className="container">Gluten Free<input type="checkbox" /><span className="checkmark"></span></label></td>
              <td className="other-table"><label className="container">Baking Staples<input type="checkbox" /><span className="checkmark"></span></label></td>
            </tr>
            <tr>
              <td className="other-table"><label className="container">Pet Food<input type="checkbox" /><span className="checkmark"></span></label></td>
              <td className="other-table"><label className="container">Other<input type="checkbox" /><span className="checkmark"></span></label></td>
            </tr>
          </tbody>
        </table>

        <p className="distance">Show Me Food Within: <input className="mile-input" type="number" min="0" step="5" onkeydown="return false" /> miles</p>
        <br />
        <h2 className="h2">Minimum and Maximum Weights</h2>
        <p className="distance small-text">Alert me about donations over <input className="mile-input" type="number" min="0" step="5" onkeydown="return false" /> pounds</p>
        <p className="distance small-text">Do NOT alert me about donations over <input className="mile-input" type="number" min="0" step="5" onkeydown="return false" /> pounds</p>

        <br />
        <h2 className="h2">Special Instructions</h2>
        <p className="distance small-text">What you type in this box will be shared with anyone that claims an item you post. You can use it to provide additional directions, or contact info.</p>
        <textarea></textarea>
        <button type="submit" value="submit">
          Submit
        </button>
      </div>
    );
  }
}

export default Preferences;
