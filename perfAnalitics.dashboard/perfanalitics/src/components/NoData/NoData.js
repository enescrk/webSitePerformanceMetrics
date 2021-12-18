import React from 'react';
import icon from '../../assets/loading.png';
const NoData = () => (
  <div className="w-100 p-3" >
    <div style={{fontSize: "30px"}}>
    Default data is loading <img height="40" src={icon} alt="sad"></img>
    </div>
    <div>
    If there is no data, please search with a custom url or leave it blank to pull all data
    </div>
  </div>
);

NoData.propTypes = {};

NoData.defaultProps = {};

export default NoData;
