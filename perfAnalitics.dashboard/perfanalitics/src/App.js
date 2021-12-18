import "./App.css";
import { Header } from "./components/header/header";
import { Filter } from "./components/Filter/Filter";
import { Chart } from "./components/chart/Chart";
import CreateScript from "./components/createScript/createScript";
import axios from "axios";
import moment from "moment";
import React from "react";
import ReactDOM from "react-dom";
import NoData from "./components/NoData/NoData";

var state = {
  baseUrl: "https://young-garden-19393.herokuapp.com/getMeasures",
  isHalf: true,
  queryParams: {
    url: "",
    startDate: null,
    endDate: null,
  },
  measures: [],
  ttfbArr: [],
  fcpArr: [],
  domLoadArr: [],
  windowLoadArr: [],
  measureProps: ["ttfb", "fcp", "domLoad", "windowLoad"],
};

//* Generate Chart if there any data
function setDom() {
  let element;
  element = (
    <div className="chartsSection p-3">
     
      <div className="row">
        <Header></Header>
      </div>
      <div className="row">
        <CreateScript></CreateScript>
      </div>
      <div className="row">
        <Filter
          getMetrics={this.getMetricsFromApi}
          queryParams={state.queryParams}
        ></Filter>
      </div>
      <div className="row">
      <div className="col p-4" id="ttfbChart">
          <Chart measures={state.ttfbArr} name="ttfb" color="red"></Chart>
        </div>
        <div className="col p-4" id="fcpChart">
          <Chart measures={state.fcpArr} name="fcp" color="orange"></Chart>
        </div>
      </div>
      <div className="row">
        <div className="col p-4" id="domLoadChart">
          <Chart
            measures={state.domLoadArr}
            name="DOM Load"
            color="blue"
          ></Chart>
        </div>
        <div className="col p-4" id="windowLoadChart">
          <Chart
            measures={state.windowLoadArr}
            name="Window Load"
            color="purple"
          ></Chart>
        </div>
      </div>
    </div>
  );

  return element;
}

//* Prepare url with default last half hour date or with selected dates
function prepareRequestUrl() {
  let url = "";
  // url with default params for now to half hour ago
  if (state.isHalf == true) {
    var today = new Date();
    var halfOurAgo = today.setHours(today.getHours() - 1) + 1800000;
    url = `${state.baseUrl}?url=' '&startDate=${halfOurAgo}&endDate=${moment(
      new Date()
    ).valueOf()}`;
    state.isHalf = false;
  } else {
    url = `${state.baseUrl}?url=${state.queryParams.url}&startDate=${moment(
      state.queryParams.startDate
    ).valueOf()}&endDate=${state.queryParams.endDate}`;
  }
  return url;
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.getMetricsFromApi.bind(this);
    setDom = setDom.bind(this);
  }

  // Fetch data from perfAnalitics.api and seperate them for charts
  getMetricsFromApi() {
    if (
      (state.queryParams.startDate && state.queryParams.endDate) ||
      state.isHalf == true
    ) {
      axios
        .get(prepareRequestUrl())
        .then((res) => {
          state.measures = res.data.measures;
          state.ttfbArr = [];
          state.fcpArr = [];
          state.domLoadArr = [];
          state.windowLoadArr = [];

          state.measures.forEach((element) => {
            state.measureProps.forEach((item) => {
              let model = {
                date: element.date,
                amount: element[`${item}`],
              };
              if (item === "ttfb") {
                state.ttfbArr.push(model);
              } else if (item === "fcp") {
                state.fcpArr.push(model);
              } else if (item === "domLoad") {
                state.domLoadArr.push(model);
              } else if (item === "windowLoad") {
                state.windowLoadArr.push(model);
              }
            });
          });
          setTimeout(() => {
            ReactDOM.render(setDom(), document.getElementById("main"));
          }, 1500);
        })
        .catch();
    }
  }

  render() {
    return (
      <div id="main" className="App container shadow">
        <div className="row w-100">
          <Header></Header>
        </div>
        <div className="row w-100">
          <CreateScript></CreateScript>
        </div>
        <div className="row w-100">
          <Filter
            getMetrics={this.getMetricsFromApi()}
            queryParams={state.queryParams}
          ></Filter>
        </div>
        <div className="row mx-auto">
          <NoData></NoData>
        </div>
      </div>
    );
  }
}

export default App;
