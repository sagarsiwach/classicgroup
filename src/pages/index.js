import * as React from "react";
import Header from "../components/header";

const IndexPage = () => {
  return (
    <>
      <body>
        <Header />
        <div className = "text-2xl">
          <h1 className="text-2xl">Hello</h1>
          <ul className ="">
            <li>Point Number 01</li>
            <li>Point Number 02</li>
            <li>Point Number 03</li>
            <li>Point Number 04</li>
          </ul>
        </div>
      </body>
    </>
  );
};

export default IndexPage;
