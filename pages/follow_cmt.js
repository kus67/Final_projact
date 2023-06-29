import React from 'react'
import Appbarcmt from './committee/appbarcmt/appbarcmt'
import Timedata from "./home_page/components/timedata";


function follow_cmt() {
  return (
    <>
    
      <Appbarcmt />
      <div className=" ml-5 mr-5 mt-2 h-50 rounded-lg">
        <Timedata />



      </div>
    </>
  )
}

export default follow_cmt