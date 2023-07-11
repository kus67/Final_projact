import React from 'react'
import Appber from "./user/appber/appber";
import Timedata from "./user/components/timedata";
import Follow_students from "./user/fowllow/follow_students";
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