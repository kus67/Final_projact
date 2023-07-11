




import React, { useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, TextField, Button, Select, MenuItem } from '@mui/material';
import FormControl from '@mui/material/FormControl';

import Daymonthyeas from '../components/Daymonthyeas';
import School_year from '../components/school_year';
import AddCommittee from '../components/addcommittee';

const projectOptions = [
    {
        id: 1,
        name: 'Web Application for Final Project Defense',
        fullName: ['Soulivanh nanthavong', 'Soulivanh nanthavong'],
        majors: ['4CS2', '4CS3'],
    },
    {
        id: 2,
        name: 'Project Management Professional',
        fullName: ['john', 'jane'],
        majors: ['4CS1', '4CS4'],
    },
    // Add more project options here
];

const DataTable = () => {
    const [location, setLocation] = useState('');

    const handleChange = (event) => {
        setLocation(event.target.value);
    };
    const [data, setData] = useState([
        { id: 1, time: '08:00-08:15', project: 1, fullName: ['Soulivanh nanthavong', 'Soulivanh nanthavong'], major: ['4CS2', '4CS1'] },
        { id: 2, time: '08:15-08:30', project: 2, fullName: ['john', 'jane'], major: ['4CS1', '4CS1'] },
    ]);

    const handleInputChange = (index, field, value) => {
        const newData = [...data];
        newData[index][field] = value;
        setData(newData);
    };

    const handleAddRow = () => {
        const newData = [...data];
        const newId = newData.length + 1;
        const lastTime = newData[newData.length - 1]?.time;
        const startTime = lastTime ? lastTime.slice(9) : '08:00';
        const endTime = addMinutes(startTime, 15);
        const newRow = {
            id: newId,
            time: `${startTime}-${endTime}`,
            project: '',
            fullName: [''],
            major: [''],
        };
        newData.push(newRow);
        setData(newData);
    };

    const handleDeleteRow = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        newData.forEach((row, idx) => {
            row.id = idx + 1;
        });
        setData(newData);
    };

    const handleProjectChange = (index, value) => {
        const project = projectOptions.find((option) => option.id === value);
        if (project) {
            const newData = [...data];
            newData[index].project = value;
            newData[index].fullName = project.fullName;
            newData[index].major = project.majors;
            setData(newData);
        }
    };

    const addMinutes = (time, minutes) => {
        const [hours, mins] = time.split(':').map(Number);
        const totalMinutes = hours * 60 + mins + minutes;
        const newHours = Math.floor(totalMinutes / 60).toString().padStart(2, '0');
        const newMins = (totalMinutes % 60).toString().padStart(2, '0');
        return `${newHours}:${newMins}`;
    };

    return (

        <div className='font-Lao'>
            <h1 className="text-2xl font-bold mt-2 mb-5 text-teal-400 text-center">
                ຕາຕະລາງປ້ອງກັນຫົວຂໍ້ຈົບຊັ້ນ ຫ້ອງ4CS1,ພາກວິຊາວິທະຍາສາດພິວເຕີ
            </h1>
            <div className="flex justify-center mb-5">
                <span className="text-2xl text-teal-400">ສະຖານທີ່ ຫ້ອງ</span>
                <div className="ml-2 mr-2">
                    <FormControl variant="outlined" size="small">
                                <Select
                                    labelId="demo-select-label"
                                    id="demo-select"
                                    value={location}
                                    onChange={handleChange}
                                    label="Location"
                                >
                                    <MenuItem value="">
                                        <em>ວ້າງ</em>
                                    </MenuItem>
                                    <MenuItem value={10}>CS001</MenuItem>
                                    <MenuItem value={20}>CS002</MenuItem>
                                    <MenuItem value={30}>CS003</MenuItem>
                                    <MenuItem value={40}>CS001</MenuItem>
                                    <MenuItem value={50}>CS002</MenuItem>
                                    <MenuItem value={60}>CS003</MenuItem>
                                </Select>
                            </FormControl>
                </div>
                <span className="text-2xl text-teal-400"> , ວັນທີ </span>

                <Daymonthyeas />

                <span className="text-2xl text-teal-400"> . ສົກຮຽນ</span>

                <School_year />


            </div>

            <div className="mb-3">




            </div>
            <AddCommittee />
            <Table className='mb-10'>
                <TableHead >
                    <TableRow className='text-white bg-slate-200'>
                        <TableCell >ID</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell>Project</TableCell>
                        <TableCell>Full Name</TableCell>
                        <TableCell>Major</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.time}</TableCell>
                            <TableCell>
                                <Select
                                    value={row.project}
                                    onChange={(e) => handleProjectChange(index, e.target.value)}
                                >
                                    {projectOptions.map((option) => (
                                        <MenuItem key={option.id} value={option.id}>
                                            {option.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </TableCell>
                            <TableCell>
                                {row.fullName.map((name, nameIndex) => (
                                    <TextField className='w-auto'
                                        key={nameIndex}
                                        value={name}
                                        onChange={(e) => {
                                            const newFullName = [...row.fullName];
                                            newFullName[nameIndex] = e.target.value;
                                            handleInputChange(index, 'fullName', newFullName);
                                        }}
                                        multiline
                                    />
                                ))}

                            </TableCell>
                            <TableCell>
                                {row.major.map((name, nameIndex) => (
                                    <TextField className='w-auto '
                                        key={nameIndex}
                                        value={name}
                                        onChange={(e) => {
                                            const newMajor = [...row.major];
                                            newMajor[nameIndex] = e.target.value;
                                            handleInputChange(index, 'major', newMajor);
                                        }}
                                        multiline
                                    />
                                ))}
                            </TableCell>
                            <TableCell>
                                {index === data.length - 1 ? (
                                    <Button className='bg-green-600' variant="contained" onClick={handleAddRow}>
                                        Add Row
                                    </Button>
                                ) : (
                                    <Button className='bg-red-800' variant="contained" color="error" onClick={() => handleDeleteRow(index)}>
                                        Delete
                                    </Button>
                                )}
                            </TableCell>
                        </TableRow>




                    ))}
                </TableBody>

            </Table>
        </div>
    );
};

export default DataTable;



