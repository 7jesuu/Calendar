import React from 'react';
interface CalendarProps {
    locale?: string;
    selectedDate: Date;
    selectDate: (date: Date) => void;
}

export const Calendar: React.FC<CalendarProps> = () => {
    console.log('@')
    return <div>Calendar</div>;
};