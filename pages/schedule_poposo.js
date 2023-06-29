import React from "react";
import Majrpoposo from "./home_page/components/majorpoposo";
import Appber from "./home_page/components/appber";
import Timedata from "./home_page/components/timedata";

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