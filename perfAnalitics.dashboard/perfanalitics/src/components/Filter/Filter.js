import React from "react";
import moment from "moment";

export class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { starDate: moment(), endDate: moment(), url: " " };
    this.setChange = this.setChange.bind(this);
  }

  // When inputs change bind that with app.js's props
  setChange() {
    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;
    let url = document.getElementById("url").value;
    this.props.queryParams.url = url;
    this.props.queryParams.startDate = moment(startDate).valueOf();
    this.props.queryParams.endDate = moment(endDate).valueOf();
  }

  render() {
    const inputstyle = {
      color: "black",
      backgroundColor: "smokeWhite",
      padding: "5px",
      fontFamily: "Arial",
      border: "1px solid grey",
      borderRadius: "5px",
      width: "100%",
    };
    return (
      <div className="w-100 ">
        <div className="row">
          <div
            className="card bg-dark m-2 py-2 w-100"
            style={{ color: "white" }}
          >
            By default, data for the last 30 minutes is displayed. By leaving
            the url blank, you can extract all data between certain dates or
            search for a specific url.
          </div>
        </div>
        <div className="row py-4">
          <div className="col-sm-3 col-12">
            <div>
              <label>Url</label>
            </div>
            <input
              style={inputstyle}
              id="url"
              type="text"
              placeholder="www.example.com"
              onChange={this.setChange}
            ></input>
          </div>
          <div className="col-sm-3 col-12">
            <div>
              <label>Start Date</label>
            </div>
            <input
              style={inputstyle}
              id="startDate"
              type="date"
              onChange={this.setChange}
            ></input>
          </div>
          <div className="col-sm-3 col-12">
            <div>
              <label>End Date</label>
            </div>
            <input
              style={inputstyle}
              id="endDate"
              type="date"
              onChange={this.setChange}
            ></input>
          </div>
          <div className="col-sm-3 col-12 my-auto">
            <button
              type="button"
              className="btn btn-success w-75 py-2 mt-2"
              onClick={this.props.getMetrics}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    );
  }
}
