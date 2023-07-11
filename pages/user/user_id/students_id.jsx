import React from 'react'

function Student_id() {
    return (
        <div className="rounded-lg object-center bg-indigo-950 ml-5 mr-5 mt-4 h-50 flex  items-center justify-center">

            <div className='mt-6 mb-8 ml-3 mr-3  bg-white rounded-lg flex '>
                <div className="border-b border-gray-900/10 p-8 ">


                    <div className="sm:col-span-2 sm:col-start-1 mt-7">
                        <label
                            htmlFor="city"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            ID Student 1
                        </label>
                        <div className="mt-2">
                            <input
                                type="ID"
                                name="city"
                                id="city"
                                autoComplete="address-level2"
                                className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="full-name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Full name 1
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="full-name"
                                    id="Full name"
                                    autoComplete="given-name"
                                    className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                                />
                            </div>
                        </div>
                    </div>




                    <div class="sm:col-span-3">
                        <label for="Class" class="block text-sm font-medium leading-6 text-gray-900 mt-5">Class for student1 </label>
                        <div class="mt-2">
                            <select id="Class" name="Class" autocomplete="Class-name" class="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option>4CS1</option>
                                <option>4CS2</option>
                                <option>4CW1</option>
                                <option>4CW2</option>
                                <option>4CPR1</option>
                                <option>4CPR2</option>
                                <option>2CCS</option>
                            </select>
                        </div>
                    </div>

                    {/* Stoudent ID2 */}




                </div>
                <div>
                    <div className='p-8 ' >
                        <div className="sm:col-span-2 sm:col-start-1 mt-7 ">
                            <label
                                htmlFor="city"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                ID Student 2
                            </label>
                            <div className="mt-2">
                                <input
                                    type="ID"
                                    name="city"
                                    id="city"
                                    autoComplete="address-level2"
                                    className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="full-name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Full name 2
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="full-name"
                                        id="full-name"
                                        autoComplete="given-name"
                                        className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                                    />
                                </div>
                            </div>
                        </div>
                        <div class for student2="sm:col-span-3">
                            <label for="Class" class="block text-sm font-medium leading-6 text-gray-900 mt-5">
                                Class for student2</label>
                            <div class="mt-2">
                                <select id="Class" name="Class" autocomplete="Class-name"
                                    class="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm
                                 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                                 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ">
                                    <option>4CS1</option>
                                    <option>4CS2</option>
                                    <option>4CW1</option>
                                    <option>4CW2</option>
                                    <option>4CPR1</option>
                                    <option>4CPR2</option>
                                    <option>2CCS</option>
                                </select>
                            </div>
                        </div>

                    </div>
                </div>

            
                    <div className='p-8  '>
                        <div className=" mt-7 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="Projact-name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Projact name
                                </label>
                                <div className="mt-2 ">
                                    <input

                                        type="text"
                                        name="Projact-name"
                                        id="Projact-name"
                                        autoComplete="given-name"
                                        className="block w-40 rounded-md border-0 py-1.5
                                     text-gray-900 shadow-sm ring-1 ring-inset
                                      ring-gray-300 placeholder:text-gray-400
                                       focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                                       sm:text-sm sm:leading-6 "
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="mt-4  items-center  gap-x-6">
                            <text type="text"
                                class="text-lg font-semibold leading-6 text-red-500">ກະລຸນາກວດຂໍມູນໃຫ້ລະອຽງ</text>
                        </div>
                        <button type="submit"
                            class="mt-6 rounded-md bg-indigo-600 px-20 py-2 text-sm font-semibold text-white 
                            shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
                            focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>

                    </div>
                
            </div>
        </div>
    )
}

export default Student_id