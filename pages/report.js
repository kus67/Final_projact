import React from "react";
import Commend from "./home_page/components/commen";
import Appber from "./home_page/components/appber";
import Ml from "./user/ml";
import Timedata from "./home_page/components/timedata";

function report() {
  return (
    <>
      <Appber />
      <div className=" ml-5 mr-5 mt-2 h-50 rounded-lg">

        <Timedata />
        <Ml />
        <div className=" rounded-lg">
          <Commend />

        </div>
      </div>
    </>
  );
}

export default report;
