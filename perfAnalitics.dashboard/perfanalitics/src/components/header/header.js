import "./header.css";
import React from "react";
import icon from '../../assets/hand.png';
export class Header extends React.Component {

  
  render() {
    
    return (
      <div className="w-100">
        <div className="p-3 row">
          <span
            className="mx-auto"
            style={{ fontSize: "30px", fontWeight: 500 }}
          >
            <img height="60" className="mr-3"  src={icon}  alt="helloIcon"></img>
            Welcome to perfAnalitics Dashboard
          </span>
        </div>
      </div>
    );
  }
}
