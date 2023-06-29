import React from "react";

function Commend() {
  return (
    <div class="flex justify-center items-center md:px-10 min-h-screen bg-[#ffffff]">
      <div className="md:flex md:justify-center md:flex-wrap gap-6">
        <div className="w-full h-84 p-3 border bg-slate mt-5 rounded-lg md:w-80">
          <div className="flex items-center gap-1">
            <p className="text-indigo-950 font-semibold text-sm ">2 Credits </p>
          </div>
          <p className="text-lg font-semibold mt-1">
            Increase confidence with TrustPilot reviews
          </p>
          <span className="h-8 mt-2 w-24 cursor-pointer font-semibold transition-all hover:text-blue-700 bg-pink-200 flex justify-center items-center text-sm rounded-full">
            Integrations
          </span>
          <p className="text-sm mt-3 text-pink-500">
            Some Kind of short description can go here to better explain the
            recommended task.
          </p>
          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center gap-2">
              <i className="cursor-pointer text-pink-400 fa fa-calendar-o"></i>
              <p className="text-pink-400 font-semibold text-sm">2 Days</p>
            </div>
            <div className="flex cursor-pointer">
              <span className="h-9 w-9 border-2 rounded-full flex border-white">
                <img
                  className="rounded-full object-cover"
                  src="https://imgur.com/s1Y39Um.png"
                  height="100%"
                  width="100%"
                  alt="user avatar"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-center md:flex-wrap gap-6">
        <div className="w-full h-84 p-3 border bg-white mt-5 rounded-lg md:w-80">
          <div className="flex items-center gap-1">
            <p className="text-pink-500 font-semibold text-sm ">2 Credits </p>
          </div>
          <p className="text-lg font-semibold mt-1">
            Increase confidence with TrustPilot reviews
          </p>
          <span className="h-8 mt-2 w-24 cursor-pointer font-semibold transition-all hover:text-blue-700 bg-pink-200 flex justify-center items-center text-sm rounded-full">
            Integrations
          </span>
          <p className="text-sm mt-3 text-pink-500">
            Some Kind of short description can go here to better explain the
            recommended task.
          </p>
          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center gap-2">
              <i className="cursor-pointer text-pink-400 fa fa-calendar-o"></i>
              <p className="text-pink-400 font-semibold text-sm">2 Days</p>
            </div>
            <div className="flex cursor-pointer">
              <span className="h-9 w-9 border-2 rounded-full flex border-white">
                <img
                  className="rounded-full object-cover"
                  src="https://imgur.com/s1Y39Um.png"
                  height="100%"
                  width="100%"
                  alt="user avatar"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commend;
