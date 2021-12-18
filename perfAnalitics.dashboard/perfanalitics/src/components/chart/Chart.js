import React from "react";
import { Line } from "react-chartjs-2";
import icon from '../../assets/info.png';
export class Chart extends React.Component {
  constructor(props) {
    super(props);
  }

  getTooltipConent(){
    switch (this.props.name) {
      case "ttfb":
        return "Time to first byte (TTFB) is a metric for determining the responsiveness of a web server. It measures the amount of time between creating a connection to the server and downloading the contents of a web page."
        break;
      case "fcp":
        return "The First Contentful Paint (FCP) metric measures the time from when the page starts loading to when any part of the page's content is rendered on the screen. "
        break;
      case "DOM Load":
        return "Time until the document has loaded, and the initial markup has been parsed. This corresponds to the browser DOMContentLoaded event."
        break;
      case "Window Load":
        return "It refers to the time it takes for a page to load. It covers the time from T=0 until the loadEventEnd event."
        break;
      default:
        return "Deneme 2"
        break;
    }
  }

  render() {
    return (
      <div className="row shadow mx-auto p-3 rounded">
        <b>
          {this.props.name} Chart{" "}
          <img
            src={icon}
            alt="info"
            height="20"
            ata-toggle="tooltip"
            data-placement="bottom"
            title={this.getTooltipConent()}
          ></img>
        </b>

        <Line
          data={{
            labels: this.props.measures.map((x) => x.date),
            datasets: [
              {
                label: this.props.name,
                data: this.props.measures.map((x) => x.amount),
                backgroundColor: [this.props.color],
              },
            ],
          }}
        ></Line>
      </div>
    );
  }
}
