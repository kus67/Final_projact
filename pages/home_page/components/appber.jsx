import Link from "next/link";
import React from "react";

function Appbar() {
  return (
    <div className=" font-Lao">
      {/* Navigation bar */}
      <div className="rounded-lg ml-5 mr-5 mt-2 text-white justify-between px-10 flex h-14 items-center text-xl font-black  bg-indigo-950">
        <div className="flex space-x-5">
          <Link href="/students_id">
            <p className="hover:underline cursor-pointer">StudentsID</p>
          </Link>
        </div>

        <ul className="flex space-x-5">
          <Link href="/home">
            <p className="hover:underline cursor-pointer">Home</p>
          </Link>

          <Link href="/homecmt">
            <p className="hover:underline cursor-pointer">home</p>
          </Link>
          
          
          <Link href="/schedule_poposo">
            <p className="hover:underline cursor-pointer">Poposo</p>
          </Link>

          <Link href="/follow">
            <p className="hover:underline cursor-pointer">Follow</p>
          </Link> 

          <Link href="/schedule_final">
            <p className="hover:underline cursor-pointer">Final</p>
          </Link>

          <Link href="/report">
            <p className="hover:underline cursor-pointer">ລາຍງານ</p>
          </Link>
        </ul>

        <div className="flex space-x-5">
          <Link href="/register_login">
            <p className="hover:underline cursor-pointer">Register/Login</p>
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default Appbar;
