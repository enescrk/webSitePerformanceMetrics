<h1>Web Perfromance Metrics</h1>

<div>
    <h2>
        perfAnalitics is a web project that captures, captures and visualizes performance data of desired web applications.
    </h2>
</div> 

<div>
    perfAnalitics consists of three subsystems. These; perfAnalitics.js, perfAnalitics.api and perfAnalitics.dashboard 
</div>
<br>
<div>
    The project is kept on different platforms to be used free of charge for an unlimited period of time. Google Firebase Hosting was used for the Dashboard project, and Heroku, which is advanced in deployment processes and testing, was used for the API project.
</div>

<br>
<div>
    To use the project, you can copy the script at https://perfanalitics.web.app/ by clicking the copy button. After adding this script to your website, the data will be kept in perfAnalitic DB. Mongo DB was used because a single schema is used in the project and I want fast querying. After adding the script code to your site, you can access your performance data by filtering the URL you added from https://perfanalitics.web.app/.
</div>

<br>
<h3>
Run in local environment with Docker
</h3>
<div>
 The project is dockerized. To run the project in the local environment, it is sufficient to type "docker compose build" and then "docker compose up" in the terminal in the home directory. The API project will run on port 8000, and the dashboard project will run on port 3000.   
 </dvi>
<br>
<h3>
    PerfAnalitics API
</h3>
<div>
    <div>
        BaseUrl: https://young-garden-19393.herokuapp.com
    </div>
    <dl>
        <dt>Get/getMeasures -> Get measures with query parameters</dt>
        <dd>- url</dd>
        <dd>- startDate (milisecond)</dd>
        <dd>- endDate (milisecond)</dd>
        <dt>Post/sendMetrics -> Post website performance metrics</dt>
        <dd>- url</dd>
        <dd>- date (milisecond)</dd>
        <dd>- ttfb</dd>
        <dd>- fcp</dd>
        <dd>- domLoad</dd>
        <dd>- windowLoad</dd>
      </dl>
</div>

<h3>PerfAnalitics Script</h3>

Paste the code at the bottom of the body field on your website's index.html page
<br>
It just a 1 kb before minifed
```html
<script>window.onload=function(){let e={url:window.location.host,date:(new Date).getTime(),ttfb:window.performance.timing.responseStart-window.performance.timing.requestStart,fcp:window.performance.timing.responseStart-window.performance.timing.requestStart,domLoad:window.performance.timing.domComplete-window.performance.timing.domLoading,windowLoad:Date.now()-window.performance.timing.navigationStart};var n=new XMLHttpRequest;n.open("POST","https://young-garden-19393.herokuapp.com/sendMetrics",!0),n.setRequestHeader("Content-Type","application/json"),n.send(JSON.stringify(e))};</script>
```

It will pass the data to the site perfAnalitics.api

A script was added to the CabinFit project, which I made before and working on kigili.com. New data continues to be added.

### Dashboard

Dashboard written with React.
Bootstrap, axios, moment and a few more helpers used.

Url query and start-end date filters have been added so that anyone who adds the script to their site can use it.

To visit https://perfanalitics.web.app/

<img src="./perfAnalitics.dashboard/perfanalitics/src/assets/dashboard.PNG" alt="">
