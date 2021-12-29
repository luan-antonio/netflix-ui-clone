import React from "react";
import "./header.css";

export default ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Yifzf4MW1SjI8jOJMHEVyxgIoK7QjL94f8pkdp7JD3suVOXxOlZ7XvRmozxU2dCw32k&usqp=CAU"
            alt="logo"
          ></img>
        </a>
      </div>
      <div className="header--user">
        <a href="">
          <img
            src="https://occ-0-5395-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUgzrBovlCuT6bxWcqfuRcQ4dt4BOaE6X4P3WNIRTiQXb_oFnhpSZ3BwFQMAG6SmgXxIBSn02IhHGTkf-vXTAUCz2WmC.png?r=478"
            alt="profile"
          ></img>
        </a>
      </div>
    </header>
  );
};
