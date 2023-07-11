import React from "react";
import Majrpoposo from "./user/schedule/majorpoposo";
import Appber from "./user/appber/appber";
import Timedata from "./user/components/timedata";

function schedule_poposo() {
  return (
    <>
      <Appber />
      <div className=" ml-5 mr-5 mt-2 h-50 rounded-lg">
        <Timedata />
        <Majrpoposo />
      </div>
    </>
  );
}

export default schedule_poposo;