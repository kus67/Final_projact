import React from 'react'
import Appbarcmt from './committee/appbarcmt/appbarcmt'
import Timedata from "./user/components/timedata";
import Majrpoposo from "./user/schedule/majorpoposo";

function schedule_poposo_cmt() {
  return (
    <>

      <Appbarcmt />
      <div className=" ml-5 mr-5 mt-2 h-50 rounded-lg">

      <Timedata />
      <Majrpoposo />
      </div>
    </>
  )
}

export default schedule_poposo_cmt