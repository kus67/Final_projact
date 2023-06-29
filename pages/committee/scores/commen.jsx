import React from 'react'
import {
    Button,
} from "@material-ui/core";
function Commen() {
    return (
        <div className=" font-Lao">

            <div className=" flex justify-center mr-60 ml-60 rounded-b-lg shadow-sm">
                <form className="  ml-96  mt-3 mb-3 flex flex-col ">

                    <div className="border border-red-300 rounded-md mb-3 mr-96">
                        <label className=" ml-16 mr-5 mt-3 mb-3">ຂໍ້ສະເໜີໃຫ້ເເກ້ໃຂ ປັບປຸງ </label>     <input


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
    )
}

export default Commen