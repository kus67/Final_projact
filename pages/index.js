import React from "react";
import Appber from "./home_page/components/appber";
import Page from "./home_page/components/page";
import MUI from "./user/MUI";
import Download from "./user/download";
import CommentBox from "./home_page/components/CommentBox";
import Checked from "./user/schZ";
function Homepage() {
  return (
    <>
      <div>
        <Appber />
        <Page />
  
        {/* <MUI />
        <Download /> */} 
        {/* <Checked /> ////pharn/// */}
        {/* <CommentBox /> */}

      </div>
    </>
  );
}

export default Homepage;
