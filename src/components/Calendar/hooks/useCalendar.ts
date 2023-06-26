import React from 'react';

import { createMonth, createDate } from '../../../utils/helpers/date';
interface UseCalendarParams {
    locale?: string;
    selectedDate: Date;
}  

export const useCalendar = ({locale, selectedDate: date }: UseCalendarParams) => {
    const [mode, setMode] = React.useState<'days' | 'monthes' | 'years'>('days')
    const [selectedDate, setSelectedDay] = React.useState(createDate({date}))
    const [selectedMonth, setSelectedMonth] = React.useState(
        createMonth({date: new Date(selectedDate.year, selectedDate.monthIndex), locale}))
        
    const [selected]
    
    return {}; 
};