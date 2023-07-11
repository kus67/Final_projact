import React, { useState } from 'react';

const Daymonthyeas = () => {
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const years = Array.from({ length: 50 }, (_, i) => 2023 - i);

    const handleDayChange = (event) => {
        setSelectedDay(event.target.value);
    };

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    return (
        <div className="flex justify-center mb-5">
                <div className="ml-2">
                    
                    <select
                        value={selectedDay}
                        onChange={handleDayChange}
                        className="border rounded-md p-1"
                    >
                        <option value="">Day</option>
                        {days.map((day) => (
                            <option key={day} value={day}>
                                {day}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="ml-2">
                    <select
                        value={selectedMonth}
                        onChange={handleMonthChange}
                        className="border rounded-md p-1"
                    >
                        <option value="">Month</option>
                        {months.map((month, index) => (
                            <option key={index} value={month}>
                                {month}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="ml-2">
                    <select
                        value={selectedYear}
                        onChange={handleYearChange}
                        className="border rounded-md p-1"
                    >
                        <option value="">Year</option>
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
    );
};

export default Daymonthyeas;
