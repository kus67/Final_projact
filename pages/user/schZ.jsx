import React from "react";

/// ໄລຍະປະຕີບັບ

function Checked() {
  const date = new Date().toDateString();
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  function handleChecked(id) {
    const checkedGreen = document.getElementById("check" + id);
    checkedGreen.classList.toggle("green");

    const strikeUnstrike = document.getElementById("strike" + id);
    strikeUnstrike.classList.toggle("strike_none");
  }

 return (
   <div className="flex justify-center items-center min-h-screen bg-[#cbd7e3]">
     <div className="h-auto  w-96 bg-white rounded-lg p-4">
       <div className="mt-3 text-sm text-[#139a15] flex justify-between items-center">
         <span className="set_date font-semibold">{date}</span>
         <span className="set_time font-semibold">{time}</span>
       </div>
       <ul className="my-4 ">
         <li className=" mt-4" id="1">
           <div className="flex gap-2">
             <div className="w-9/12 h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3">
               <span
                 id="check1"
                 className=" w-7 h-7 bg-white rounded-full border border-white transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center"
                 onClick={() => handleChecked(1)}
               >
                 <i className="text-white fa fa-check"></i>
               </span>
               <strike
                 id="strike1"
                 className="strike_none text-sm ml-4 text-[#5b7a9d] font-semibold"
               >
                 take out the trash
               </strike>
             </div>
             <span className="w-1/4 h-12 bg-[#e0ebff] rounded-[7px] flex justify-center text-sm text-[#5b7a9d] font-semibold items-center ">
               9:00 AM
             </span>
           </div>
         </li>
       </ul>
       <ul className="my-4 ">
         <li className=" mt-4" id="2">
           <div className="flex gap-2">
             <div className="w-9/12 h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3">
               <span
                 id="check2"
                 className=" w-7 h-7 bg-white rounded-full border border-white transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center"
                 onClick={() => handleChecked(2)}
               >
                 <i className="text-white fa fa-check"></i>
               </span>
               <strike
                 id="strike2"
                 className="strike_none text-sm ml-4 text-[#5b7a9d] font-semibold"
               >
                 water the plants
               </strike>
             </div>
             <span className="w-1/4 h-12 bg-[#e0ebff] rounded-[7px] flex justify-center text-sm text-[#5b7a9d] font-semibold items-center ">
               2:00 PM
             </span>
           </div>
         </li>

         <li className=" mt-4" id="3">
           <div className="flex gap-2">
             <div className="w-9/12 h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3">
               <span
                 id="check3"
                 className=" w-7 h-7 bg-white rounded-full border border-white transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center"
                 onClick={() => handleChecked(3)}
               >
                 <i className="text-white fa fa-check"></i>
               </span>
               <strike
                 id="strike3"
                 className="strike_none text-sm ml-4 text-[#5b7a9d] font-semibold"
               >
                 buy groceries
               </strike>
             </div>
             <span className="w-1/4 h-12 bg-[#e0ebff] rounded-[7px] flex justify-center text-sm text-[#5b7a9d] font-semibold items-center ">
               5:00 PM
             </span>
           </div>
         </li>
       </ul>
     </div>
   </div>
 );
}

export default Checked;
