import React from "react";
export default class CreateScript extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      btnText: "Copy",
    };
    this.copyScriptCode = this.copyScriptCode.bind(this);
  }

  // Copy perfAnalitics.script method
  copyScriptCode() {
    let text =
      "<script>window.onload=function(){let e={url:window.location.host,date:(new Date).getTime(),ttfb:window.performance.timing.responseStart-window.performance.timing.requestStart,fcp:window.performance.timing.responseStart-window.performance.timing.requestStart,domLoad:window.performance.timing.domComplete-window.performance.timing.domLoading,windowLoad:Date.now()-window.performance.timing.navigationStart};var n=new XMLHttpRequest;n.open('POST','https://young-garden-19393.herokuapp.com/sendMetrics',!0),n.setRequestHeader('Content-Type','application/json'),n.send(JSON.stringify(e))};</script>";
    navigator.clipboard.writeText(text);
    this.setState({
      btnText: "Coppied",
    });
    setTimeout(() => {
      this.setState({
        btnText: "Coppy",
      });
    }, 1000);
  }

  render() {
    return (
      <div className="w-100">
        <div className="row  p-3">
          <div className="col text-left">
            <div>1) Copy the script code by clicking the side button</div>
            <div>
              2) Paste the code at the bottom of the body field on your
              website's index.html page
            </div>
          </div>
          <div className="col my-auto">
            <button
              type="button"
              className="btn btn-dark shadow w-50"
              onClick={this.copyScriptCode}
            >
              {this.state.btnText}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
