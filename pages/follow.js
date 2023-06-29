import React from 'react'
import Appber from "./home_page/components/appber";
import Timedata from "./home_page/components/timedata";
import Follow_students from "./home_page/components/follow_students";
function Follow() {
    return (
        <>
            <Appber />
            <div className=" ml-5 mr-5 mt-2 h-50 rounded-lg">
               
                <Timedata />
                < Follow_students />
            </div>

         
              
        </>
    )
}

export default Follow;