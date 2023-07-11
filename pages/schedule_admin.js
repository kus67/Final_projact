import React from 'react'
import Appber_admin from './admin/appber_admin/appber_admin'
import ScheduleTable from './admin/c_schedule/ScheduleTable' 

function schedule_admin() {
  return (
      <div>
          <Appber_admin />
          <div className=" ml-5 mr-5 mt-5 h-50 rounded-lg">

         
              <ScheduleTable />

          </div>
      </div>
  )
}

export default schedule_admin