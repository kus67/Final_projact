import React from 'react'
import Majorfinal from "./user/schedule/majorfinal";
import Appber from "./user/appber/appber";
import Timedata from "./user/components/timedata";

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