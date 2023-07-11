import React from 'react'
import Appber_admin from './admin/appber_admin/appber_admin'
import Admin_Page from './admin/page_admin/admin_Page'
import DenseTable from './admin/c_schedule/createData'
function home_page_admin() {
    return (
      <>
        <Appber_admin />
        <div className=" ml-5 mr-5 mt-20  h-50 rounded-lg">

          <Admin_Page />
          {/* <DenseTable /> */}
          </div>
        </>
  )
}

export default home_page_admin