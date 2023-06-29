import React, { useState } from "react";
import { Button } from "@material-ui/core";


export default function Scoring() {
    const [scores, setScores] = useState({
        subject1: "1",
        subject2: "1",
        subject3: "1",
        subject4: "1",
        subject5: "1",
        subject6: "1",
        subject7: "1",
    });

    const handleScoreChange = (event) => {
        const { name, value } = event.target;
        if (
            (name === "subject1" && value >= 1 && value <= 5) ||
            (name === "subject2" && value >= 1 && value <= 10) ||
            (name === "subject3" && value >= 1 && value <= 10) ||
            (name === "subject4" && value >= 1 && value <= 20) ||
            (name === "subject5" && value >= 1 && value <= 15) ||
            (name === "subject6" && value >= 1 && value <= 15) ||
            (name === "subject7" && value >= 1 && value <= 15)
        ) {
            setScores((prevScores) => ({
                ...prevScores,
                [name]: value,
            }));
        }
    };

    return (
        <div className=" font-Lao">

            <div className=" flex justify-center mr-60 ml-60 rounded-b-lg shadow-sm">
                <form className="  ml-96  mt-3 mb-3 flex flex-col ">

                    <div className="border border-red-300 rounded-md mb-3 mr-96 bg-slate-100">
                        <h2 className=" ml-10 mr-5 mb-2 mt-2 font-black text-center " > ການປະເມີນ ແລະ ໃຫ້ຄະແນນ</h2>
                    </div>

                    <div className="border border-red-300 rounded-md mb-3 mr-96 ">
                        <label className=" ml-16 mr-5 mb-3 " htmlFor="subject1"> ມາລະຍາດ ແລະ ການຖາມຕອບ ຂອງ ຄະແນນເຕັມ: 5</label>
                        <h2 className=" ml-5 ">ຄະແນນເຕັມ: 5</h2>
                        <input
                            type="number"
                            id="subject1"
                            name="subject1"
                            value={scores.subject1}
                            onChange={handleScoreChange}
                            className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-5 mr-5 mt-3 mb-3
              focus:ring-2 focus:ring-inset focus:ring-indigo-600"

                        />
                    </div>
                    <div className="border border-red-300 rounded-md mb-3 mr-96">
                        <label className=" ml-16 mr-5 mt-3 mb-3" htmlFor="subject2">ເຕັກນິກໃນການນໍາສະເໜີ *1</label>
                        <h2 className=" ml-5 ">ຄະແນນເຕັມ: 10</h2>
                        <input
                            type="number"
                            id="subject2"
                            name="subject2"
                            value={scores.subject2}
                            onChange={handleScoreChange}
                            className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-5 mr-5 mt-3 mb-3
              focus:ring-2 focus:ring-inset focus:ring-indigo-600"

                        />
                    </div>
                    <div className="border border-red-300 rounded-md mb-3 mr-96">
                        <label className=" ml-16 mr-5 mt-3 mb-3" htmlFor="subject3">  ເຕັກນິກໃນການນໍາສະເໜີ *2
                        </label><h2 className=" ml-5 ">ຄະແນນເຕັມ: 10</h2>


                        <input
                            type="number"
                            id="subject3"
                            name="subject3"
                            value={scores.subject3}
                            onChange={handleScoreChange}
                            className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-5 mr-5 mt-3 mb-3
              focus:ring-2 focus:ring-inset focus:ring-indigo-600"

                        />
                    </div>
                    <div className="border border-red-300 rounded-md mb-3 mr-96">
                        <label className=" ml-14 mr-5 mt-3 mb-3" htmlFor="subject4">ໂລຊິກການອອກແບບກັບໂປຣແກຣມ ແລະ ຄວາມສົມບູນ</label>
                        <h2 className=" ml-5 ">ຄະແນນເຕັມ: 20</h2>

                        <input
                            type="number"
                            id="subject4"
                            name="subject4"
                            value={scores.subject4}
                            onChange={handleScoreChange}
                            className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-5 mr-5 mt-3 mb-3
              focus:ring-2 focus:ring-inset focus:ring-indigo-600"

                        />
                    </div>
                    <div className="border border-red-300 rounded-md mb-3 mr-96">
                        <label className=" ml-16 mr-5 mt-3 mb-3" htmlFor="subject5">ການຖາມຕອບ ຂອງ *1 </label>
                        <h2 className=" ml-5 ">ຄະແນນເຕັມ: 15</h2>

                        <input
                            type="number"
                            id="subject5"
                            name="subject5"
                            value={scores.subject5}
                            onChange={handleScoreChange}
                            className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-5 mr-5 mt-3 mb-3
              focus:ring-2 focus:ring-inset focus:ring-indigo-600"

                        />
                    </div>

                    <div className="border border-red-300 rounded-md mb-3 mr-96">
                        <label className=" ml-16 mr-5 mt-3 mb-3" htmlFor="subject6">ການຖາມຕອບ ຂອງ *2
                        </label> <h2 className=" ml-5 ">ຄະແນນເຕັມ: 15</h2>


                        <input
                            type="number"
                            id="subject6"
                            name="subject6"
                            value={scores.subject6}
                            onChange={handleScoreChange}
                            className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-5 mr-5 mt-3 mb-3
              focus:ring-2 focus:ring-inset focus:ring-indigo-600"

                        />
                    </div>
                    <div className="border border-red-300 rounded-md mb-3 mr-96">
                        <label className=" ml-16 mr-5 mt-3 mb-3" htmlFor="subject7">  ຄວາມສະດວກ ແລະ ງ່າຍໃນການນໍາໃຊ້ ຄວາມສະດວກ</label>
                        <h2 className=" ml-5 ">ຄະແນນເຕັມ: 15</h2>

                        <input
                            type="number"
                            id="subject7"
                            name="subject7"
                            value={scores.subject7}
                            onChange={handleScoreChange}
                            className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-5 mr-5 mt-3 mb-3
              focus:ring-2 focus:ring-inset focus:ring-indigo-600"

                        />
                    </div>
                    <div className="flex items-center ml-44">
                        <Button variant="contained" color="primary">
                            Submit
                        </Button>
                    </div>
                </form>

            </div>
        </div>
    );
}



