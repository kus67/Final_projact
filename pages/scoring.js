import React from 'react'
import Appbarcmt from './committee/appbarcmt/appbarcmt'
import Scoring from "../pages/committee/scores/scoring"
import Commen from "../pages/committee/scores/commen"
import Choices_name from "../pages/committee/scores/choices_cmt"
import Fail_or_pass from "../pages/committee/scores/fail_or_pass"

function scoring() {
  return (
    <>
      <Appbarcmt />
      <Choices_name />
      <Scoring />
      
      <div className=''>
      <Fail_or_pass/>
        <Commen />
      </div>
     
    </>
  )
}

export default scoring