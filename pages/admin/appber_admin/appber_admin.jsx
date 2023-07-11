import React from "react";
import Link from "next/link";

function Appber_admin() {
    return (
        <div className=" font-Lao">
            {/* Navigation bar */}

            <div className="rounded-lg ml-5 mr-5 mt-1 text-white justify-between px-10 flex h-20 items-center text-xl font-black  bg-cyan-600 ">
                <img
                    className="flex object-scale-down h-16 w-16 "
                    src="/images/logo224x224-01.png"
                />
                <ul className="flex space-x-5">

                    <Link href="/home_page_admin">
                        <p className="hover:underline cursor-pointer ">Home</p>
                    </Link>
                    
                    <Link href="/schedule_admin">
                        <p className="hover:underline cursor-pointer">SchedulePoposo</p>
                    </Link> 

                    <Link href="/schedule_final_admin">
                        <p className="hover:underline cursor-pointer">ScheduleFinal</p>
                    </Link>

                 
                    <Link href="/reportcmt">
                        <p className="hover:underline cursor-pointer">Report</p>
                    </Link>
                </ul>

                <div className="flex space-x-5">
                    <Link href="/">
                        <p className="hover:underline cursor-pointer">Register/Login</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Appber_admin;

