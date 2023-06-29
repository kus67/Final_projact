import React from 'react'
import Majorfinal from "./home_page/components/majorfinal";
import Appber from "./home_page/components/appber";
import Timedata from "./home_page/components/timedata";

function schedule_final() {
  return (
      <>
          <Appber />
          <div className=" ml-5 mr-5 mt-2 h-50 rounded-lg">
              <Timedata />
              <Majorfinal />
          </div>
      </>
  )
}

export default schedule_final