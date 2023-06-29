import React from 'react'

function Fail_or_pass() {
    return (
        <div className=' font-Lao'>
            <div className=" flex justify-center mr-60 ml-60 rounded-b-lg shadow-sm ">
                <form className="  ml-96  mt-2 mb-3 flex flex-col  ">
                    <div class="border-2 border-red-600 rounded-md mb-3 mr-96 flex flex-col">
                        <label for="Commissioner" class="block text-base font-bold leading-6
                         text-gray-900 ml-8 mr-5 mt-2  ">ຄໍາຄິດເຫັນຕໍ່ບົດໂຄງການຈົບຊັ້ນ </label>

                        <div class="mt-2">
                            <select id="Commissioner" name="Commissioner" autocomplete="Commissioner-name"
                                class="block w-96 rounded-md border-0 
                                py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                 ring-gray-300 focus:ring-2 focus:ring-inset
                                  focus:ring-indigo-600 sm:max-w-xs sm:text-base
                                  sm:leading-6 ml-16 mr-5 mt-2 mb-3">
                                <option>ໃຫ້ຜ່ານເເຕ່ໃຫ້ເເກ່ໄຂ ປັບປຸງ</option>
                                <option>ໃຫ້ຜ່ານ</option>
                                <option>ໃຫ້ປັບປຸງ ເເລະ ປ້ອງກັນຮອບສອງ</option>

                            </select>
                        </div>

                    </div>



                </form>
            </div>
        </div>



    )
}

export default Fail_or_pass