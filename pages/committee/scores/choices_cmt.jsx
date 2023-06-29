import React from 'react'

function Choices_name() {
    return (
        <div className=' font-Lao'>
            <div className=" flex justify-center mr-60 ml-60 rounded-b-lg shadow-sm ">
                <form className="  ml-96  mt-3 mb-3 flex flex-col  ">

                    <div class="border border-red-300 rounded-md mb-3 mr-96 flex flex-col bg-slate-100">
                        <h2 class="block text-sm leading-6 text-gray-900 ml-10 mr-7 mt-7 mb-7 font-black">ການປ້ອງກັນບົດໂຄງການຈົບຊັ້ນຂອງນັກສຶກສາ ປະລິນຍາຕີ 2022-2023</h2>

                    </div>

                    <div class="border border-red-300 rounded-md mb-3 mr-96 flex flex-col">
                        <label for="Commissioner" class="block text-sm font-medium leading-6 text-gray-900 ml-8 mr-5 mt-2 ">ຊື່ກໍາມະການໃຫ້ຄະແນນ</label>
                        <div class="mt-2">
                            <select id="Commissioner" name="Commissioner" autocomplete="Commissioner-name" class="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 ml-16 mr-5 mt-2 mb-3">
                                <option>ອຈ ປອ ສົມສັກ ອີນທະສອນ</option>
                                <option>ອຈ ປທ ສຸລິດ ເເສງມະໂນທໍາ</option>
                            </select>
                        </div>
                    </div>
                    <div class="border border-red-300 rounded-md mb-3 mr-96 flex flex-col">
                        <label for="Commissioner" class="block text-sm font-medium leading-6 text-gray-900 ml-8 mr-5 mt-2 ">ຫົວຂໍ້ໂຄງການຈົບຊັ້ນ <h2 className=' ml-3'>ກະລຸນາເລືອກຫົວຂໍ້ໃຫ້ຖືກຕາມຕາຕະລາງການປ້ອງກັນ</h2></label>
                        <div class="mt-2">
                            <select id="Commissioner" name="Commissioner" autocomplete="Commissioner-name" class="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 ml-16 mr-5 mt-2 mb-3">
                                <option>[09:00-09:40]ລະບົບຈັດການ</option>
                                <option>Application</option>
                                <option>webApplication</option>

                            </select>
                        </div>
                    </div>

                   


                </form>
            </div>
        </div>
    )
}

export default Choices_name