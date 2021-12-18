window.onload = function () {
  const url = window.location.host;
  const date = new Date().getTime();
  const ttfb =
    window.performance.timing.responseStart -
    window.performance.timing.navigationStart;
  const fcp =
    window.performance.timing.responseStart -
    window.performance.timing.requestStart;
  const domLoad =
    window.performance.timing.domComplete -
    window.performance.timing.domLoading;
  const windowLoad =
  Date.now() -
    window.performance.timing.navigationStart;
  const baseUrl = "https://young-garden-19393.herokuapp.com/sendMetrics";
  let body = {
    url: url,
    date: date,
    ttfb: ttfb,
    fcp: fcp,
    domLoad: domLoad,
    windowLoad: windowLoad,
  };

  var xhr = new XMLHttpRequest();
  xhr.open("POST", baseUrl, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(body));
};