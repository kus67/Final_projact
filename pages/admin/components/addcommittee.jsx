import React, { useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Select, MenuItem, Chip, Button } from '@mui/material';

const projectOptions = [
    {
        committees: ['ອຈ.ປອ. ສົມສັກ ອິນທະສອນ ', 'ອຈ.ປທ. ອາມອນ ຈັນທະພາວົງ', 'ອຈ.ປອ. ລັດສະໜີ ຈິດຕະວົງ', 'ອຈ.ປອ. ພູທອນ ວົງປະສິດ',
            'ອຈ.ປທ. ສົມມິດ ທຸມມາລີ', 'ອຈ.ປທ. ສຸລິດ ແສງມະໂນທໍາ', 'ອ​ຈ.ປອ. ໃຈລາສີ ຍໍພັນໄຊ', , 'ຊອ.ປທ. ສົມມະນີ ລູຊະວົງ',
            'ຊອ.ປທ. ບຸນມີ ພັນທະວົງ', 'ຊອ.ປທ. ອໍລະດີ ຄໍາມະນີວົງ', , 'ຊອ.ປທ. ຈິດນາວັນ ພອນຄໍາມາ', 'ອຈ.ປທ. ບົວສົດ ໄຊຍະຈັກ',
            'ອຈ.ປທ ເພັດ ສອນວິໄລ', 'ປທ. ວິໄລສັກ ແກ້ວສຸດທາ', 'ຊອ.ປທ ສຸກປະເສີດ ບັນຈົງ',
            'ປທ. ຄໍາກອນ ແສງອະໄພ', 'ປທ. ມູນພິນ ພອນປັນຍາ', 'ປທ. ຕຽງທອງ ເພັງພະຈັນ',
            'ປທ. ຈັນທະສິດ ພຸດທິຫົງ', 'ປທ. ພອນສຸດາ ສຸ​ພາ​ມິດ', 'ປທ. ພານີກອນ ຄຳ​ພາ​ວົງ',],
    },
    // Add more project options here
];

const CommitteeTable = () => {
    const [data, setData] = useState([]);

    const handleAddRow = () => {
        const newRow = {
            committees: [],
        };
        setData((prevData) => [...prevData, newRow]);
    };

    const handleCommitteeChange = (index, values) => {
        const newData = [...data];
        newData[index].committees = values;
        setData(newData);
    };

    return (
        <div >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className="text-lg font-bold">
                            Committees
                            <Button className="bg-green-600 ml-4" variant="contained" onClick={handleAddRow}>
                                Add Row
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {data.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <Select
                                    multiple
                                    value={row.committees}
                                    onChange={(e) => handleCommitteeChange(index, e.target.value)}
                                    renderValue={(selected) => (
                                        <div>
                                            {selected.map((value) => (
                                                <Chip key={value} label={projectOptions[0].committees[value - 1]} />
                                            ))}
                                        </div>
                                    )}
                                >
                                    {projectOptions[0].committees.map((committee, committeeIndex) => (
                                        <MenuItem key={committeeIndex + 1} value={committeeIndex + 1}>
                                            {committee}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default CommitteeTable;
