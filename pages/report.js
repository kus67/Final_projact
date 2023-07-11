import React from "react";
import Commend from "./user/report/commen";
import Appber from "./user/appber/appber";
import Ml from "./user/report/ml";
import Timedata from "./user/components/timedata";

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
