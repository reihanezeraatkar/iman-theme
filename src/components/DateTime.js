import React, {useState, useEffect} from 'react';
import {  format, newDate } from 'date-fns-jalali';

export default function DateTime() {
    
    const [date , setDate] = useState(format(newDate(1393,6,9 , 21, 51) , ' d MMMM  yyyy HHH:mmm'))

    useEffect(() => {
        const date = setInterval(() => setDate(format(newDate(1393, 6, 9 , 21, 51), ' d MMMM  yyyy HH:mm')), 1000);
        return () => {
            clearInterval(date);
        }
    }, []);

    return (
        <>
     <p className='date-time'>{`${date.toString()}`}</p>
            
        </>
    )
}


