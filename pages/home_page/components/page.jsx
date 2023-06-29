import React from "react";

function handleDownload() {
  const link = document.createElement("a");
  link.href = "ເອກະສານສຳລັບຫຼັກສູດ 4Y.zip";
  link.download = "ເອກະສານສຳລັບຫຼັກສູດ 4Y.zip";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
function Page() {
  return (
    <div className=" font-Lao">
      <div className="rounded-lg object-center bg-indigo-950 ml-5 mr-5 mt-4 h-50 flex flex-col items-center justify-center">
        <img
          className=" flex object-scale-down h-72 w-72"
          src="/images/logo224x224-01.png"
        />
        <p className="text-4xl text-white text-center mb-6">
          Web Application for Final Project Defense
        </p>
        <div className="text-white flex  space-x-4 pb-3">
          <div>
            <p className="text-yellow-400 text-center">
              ດາວໂລດ ຟ່າຍ zip ບົດນິພົນ
            </p>
            <button className="text-2xl w-52 h-14 border text-center bg-green-500 rounded-lg">
              Download
            </button>
          </div>
          <div className="px-5 ">
            <p className="text-yellow-400 text-center">ອັບໂລດ ຟ່າຍ ບົດນິພົນ</p>
            <button className=" text-2xl w-52 h-14 border text-center bg-green-500 rounded-lg">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
