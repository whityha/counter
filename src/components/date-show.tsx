import { useEffect, useRef, useState } from 'react';
import { DATA } from '../mocks'
import { DateShowContainer } from './styled'

export const DateShow = ({activeIndex}: {activeIndex: number}) => {
    const currentDate = DATA[activeIndex].date;
    const [counter1, setCounter1] = useState<number>(currentDate[0]);
    const [counter2, setCounter2] = useState<number>(currentDate[1]);

    const interval1 = useRef<number>();
    const interval2 = useRef<number>();

    const diff1 = currentDate[0] - counter1;
    const diff2 = currentDate[1] - counter2;

    useEffect(() => {
        interval1.current = setInterval(() => {
            if(counter1 === currentDate[0]) {
                clearInterval(interval1.current);
                return;
            }
            setCounter1((prev) => diff1 > 0 ? prev + 1 : prev - 1)
        }, 300 / Math.abs(diff1))
    
        interval2.current = setInterval(() => {
            if(counter2 === currentDate[1]) {
                clearInterval(interval2.current);
                return;
            }
            setCounter2((prev) => diff2 > 0 ? prev + 1 : prev - 1)
        }, 300 / Math.abs(diff2))

        return () => {
            clearInterval(interval1.current);
            clearInterval(interval2.current);
        }
            
    }, [currentDate, counter1, counter2])

    return (
        <DateShowContainer>
            <div>{counter1}</div>
            <div>{counter2}</div>
        </DateShowContainer>
    )
}
