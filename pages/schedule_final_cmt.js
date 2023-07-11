import React from 'react'
import Appbarcmt from './committee/appbarcmt/appbarcmt'
import Majorfinal from "./user/schedule/majorfinal";
import Timedata from "./user/components/timedata";


function Schedule_finalcmt() {
    return (
        <>
            
         
               <Appbarcmt/>
            <div className=" ml-5 mr-5 mt-2 h-50 rounded-lg">
                <Timedata />
                <Majorfinal />
            </div>
        </>
    )
}

export default Schedule_finalcmt;