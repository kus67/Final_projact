import React, { useState } from 'react'


const Majorfinal = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        < >


            <div class=" flex-col mt-2 flex rounded-lg border-2 border-teal-300">
                <text className=' mt-2 mr-4 ml-4 mb-5 text-teal-400 justify-center text-center text-4xl font-Lao flex'> ຕາຕະລາງປ້ອງກັນບົດໂຄງການຈົບຊັ້ນປີ4 </text>

                <div className='flex-col py-5 mt-2 flex justify-cente'>


                    <select className='mt-2 ml-5 mr-5 text-2xl font-bold' value={selectedOption} onChange={handleOptionChange}>

                        <option value="CS1">CS1</option>

                        <option value="CS2">CS2</option>

                        <option value="CW1">CW1</option>

                        <option value="CW2ssas">CW2</option>

                        <option value="CPR1">CPR1</option>

                        <option value="CPR2">CPR2</option>

                        <option value="CCS2">CCS2</option>

                    </select>
                    {selectedOption && (
                        <div className=" mt-2 ml-5 mr-5 flex justify-center h-screen rounded-lg border-2 border-teal-500">
                            <div className="flex flex-col">
                                <div className="ml-14">{selectedOption}</div>
                            </div>
                        </div>
                    )}
                </div>

            </div>


        </>
    )
};


export default Majorfinal;

