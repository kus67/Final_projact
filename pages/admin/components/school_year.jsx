import React, { useState } from 'react';

const School_year = () => {
    const [selectedYear, setSelectedYear] = useState('');

    const schoolYears = [
        '2022-2023',
        '2023-2024',
        '2024-2025',
        '2025-2026',
        '2026-2027',
        '2027-2028',

        // Add more school years as needed
    ];

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    return (
        <div>
          
                <div className="ml-2">
                    <select
                        value={selectedYear}
                        onChange={handleYearChange}
                        className="border rounded-md p-1"
                    >
                        {schoolYears.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
           

            {/* Rest of the table code */}
        </div>
    );
};

export default School_year;
