// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//     { field: 'id', headerName: 'ID', width: 70, permissions: ['admin', 'manager', 'user'] },
//     { field: 'firstName', headerName: 'First name', width: 130, permissions: ['admin', 'manager', 'user'] },
//     { field: 'lastName', headerName: 'Last name', width: 130, permissions: ['admin', 'manager', 'user'] },
//     {
//         type: 'number',
//         width: 90,
//         permissions: ['admin', 'manager'],
//     },
//     {
//         field: 'fullName',
//         headerName: 'Full name',
//         description: 'This column has a value getter and is not sortable.',
//         sortable: false,
//         width: 160,
//         valueGetter: (params) =>
//             `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//         permissions: ['admin', 'manager', 'user'],
//     },
// ];


// const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon',},
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei',},
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime',},
//     { id: 4, lastName: 'Stark', firstName: 'Arya',},
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys',  },
//     { id: 6, lastName: 'Melisandre', firstName:'sdsdsd', },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara',},
//     { id: 8, lastName: 'Frances', firstName: 'Rossini',},
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey',},
// ];

// export default function DataTable() {
//     return (

//         <div className='h-full w-full mt-5' >
//             <DataGrid
//                 rows={rows}
//                 columns={columns}
//                 initialState={{
//                     pagination: {
//                         paginationModel: { page: 0, pageSize: 5 },
//                     },
//                 }}
//                 pageSizeOptions={[5, 10]}
//                 checkboxSelection
//             />
//         </div>
//     );
// }
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'time', headerName: 'Time', width: 90 },
    { field: 'Projact', headerName: 'Projact', width: 330 },
    { field: 'fullname1', headerName: 'Full Name1', width: 200 },
    { field: 'major1', headerName: 'Major1', width: 150 },
    { field: 'fullname2', headerName: 'Full Name2', width: 200 },
    { field: 'major2', headerName: 'Major2', width: 150 },
    { field: 'teacher', headerName: "Teacher's Name", width: 200 },
];

const rows = [
    {
        id: 1,
        time: '9:00 AM',
        Projact: 'Web Application for Final Project Defense',
        fullname1: 'Soulivanh Nanthavong',
        major1: 'Mathematics',
        fullname2: 'John Doe',
        major2: 'Mathematics',
        teacher: 'Teacher 1',
    },
    {
        id: 2,
        time: '10:30 AM',
        Projact: 'Project Management Professional',
        fullname1: 'John Doe',
        major1: 'Mathematics',
        fullname2: 'John Doe',
        major2: 'Mathematics',
        teacher: 'Teacher 2',
    },
    // Add more rows as needed
];

const ScheduleTable = () => {
    const [updatedRows, setUpdatedRows] = useState(rows);

    const handleTimeChange = (value, id) => {
        const updatedData = updatedRows.map((row) =>
            row.id === id ? { ...row, time: value } : row
        );
        setUpdatedRows(updatedData);
    };

    const tableWithoutTime = columns.slice(2).map((column) => ({
        ...column,
        renderCell: (params) => <div>{params.value}</div>,
    }));

    const tableWithTime = columns.slice(0, 2).map((column) => ({
        ...column,
        renderCell: (params) => (
            <select
                value={params.value}
                onChange={(e) => handleTimeChange(e.target.value, params.row.id)}
            >
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:30 AM">10:30 AM</option>
                <option value="1:00 PM">1:00 PM</option>
            </select>
        ),
    }));

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>
                <DataGrid rows={updatedRows} columns={tableWithoutTime} />
            </div>
            <div>
                <DataGrid rows={updatedRows} columns={tableWithTime} />
            </div>
        </div>
    );
};

export default ScheduleTable;
